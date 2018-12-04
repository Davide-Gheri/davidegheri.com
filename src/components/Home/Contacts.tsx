import React, { ChangeEvent, PureComponent } from 'react';
import Recaptcha from 'react-google-recaptcha';
import Modal, { Styles } from 'react-modal';
import { graphql, StaticQuery } from 'gatsby';
import styled from '@styled-components';
import {
  Section,
  CheckmarkSuccess,
  CheckmarkError,
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  FormTextarea,
  FormButton,
} from '@components/Styled';
import { media, encode } from '@utils';
import { ContactNode, ContactQuery, Pick2, SiteNode, SiteQuery } from '@interfaces';

const ContactsPadding = styled.div`
  position: relative;
  z-index: 10;
  padding: .75rem;
  color: #ffffff;
  width: 100%;
`;

const ContactsTitle = styled.h2`
  padding: 1.5rem 0 2rem;
  font-size: 2.25rem;
`;

const ContactsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 0 4rem;
`;

const ContactsColumn = styled.div`
  width: 80vw;
  margin: 0 auto;
  background: #2f365f;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  border-radius: 3px;
  ${media.md`max-width: 600px;`}
`;

const ContactsColumnPadding = styled.div`
  padding: 1.5rem;
  line-height: 1.5;
`;

const RecaptchaWrapper = styled.div`
  margin-bottom: 1rem;
`;

const modalStyles: Styles = {
  overlay: {
    zIndex: 99999,
  },
  content: {
    bottom: 'auto',
    top: '50%',
    left: '50%',
    right: 'auto',
    transform: 'translate(-50%, -50%)',
    minWidth: '300px',
    background: '#eff8ff',
  },
};

type ContactsProps = SiteQuery<Pick2<SiteNode, 'siteMetadata', 'recaptcha'>> & ContactQuery<Required<Pick<ContactNode, 'successMessage' | 'errorMessage'>>>;

type ModalLevel = 'success' | 'error' | null;

interface ContactsState {
  fields: {
    email: string;
    message: string;
    'g-recaptcha-response': string;
    [key: string]: string;
  };
  loading: boolean;
  valid: boolean;
  modal: {
    open: boolean;
    message: string;
    level: ModalLevel;
  };
}

export class ContactsPure extends PureComponent<ContactsProps, ContactsState> {
  timeout: any;

  state: ContactsState = {
    fields: {
      email: '',
      message: '',
      'g-recaptcha-response': '',
    },
    loading: false,
    valid: false,
    modal: {
      open: false,
      message: '',
      level: null,
    },
  };

  afterModalOpen = () => {
    this.timeout = setTimeout(() => this.closeModal(), 3000);
  };

  closeModal = () => {
    this.setState({modal: {open: false, message: '', level: null}});
    clearTimeout(this.timeout);
  };

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fields = Object.assign({}, this.state.fields);
    fields[name] = value;
    this.setState({fields});
  };

  handleRecaptcha = (value: string | null) => {
    const fields = Object.assign({}, this.state.fields);
    fields['g-recaptcha-response'] = value || '';
    this.setState({fields, valid: Boolean(value)});
  };

  onSubmit = () => {
    if (this.state.fields['g-recaptcha-response']) {
      const { datoCmsContact } = this.props;
      fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...this.state.fields }),
      }).then(res => {
        this.setState({modal: {
          open: true,
          message: datoCmsContact.successMessage,
          level: 'success',
        }});
      })
      .catch(err => {
        this.setState({modal: {
          open: true,
          message: datoCmsContact.errorMessage,
          level: 'error',
        }});
      });
    }
  };

  render() {
    const { loading, valid, fields: {email, message}, modal } = this.state;
    const { site } = this.props;

    const Checkmark = modal.level !== 'success' ? CheckmarkError : CheckmarkSuccess;
    return (
      <Section background="#38a89d">
        <ContactsPadding>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactsContent>
            {/*<ContactsColumn/>*/}
            <ContactsColumn>
              <ContactsColumnPadding>
                <Form onSubmit={this.onSubmit} name="contact" method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      data-netlify-recaptcha="true">
                  <input type="hidden" name="form-name" value="contact"/>
                  <div data-netlify-recaptcha/>
                  <FormGroup>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput
                      value={email}
                      onChange={this.onChange}
                      type="email" name="email" id="email"
                      required={true} placeholder="foo@bar.baz"/>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormTextarea
                      value={message}
                      onChange={this.onChange}
                      name="message" id="message" placeholder="Write me!"/>
                  </FormGroup>
                  <input type="hidden" name="bot-field"/>
                  {site.siteMetadata.recaptcha && (
                    <RecaptchaWrapper>
                      <Recaptcha
                        ref="recaptcha"
                        sitekey={site.siteMetadata.recaptcha.key as string}
                        onChange={this.handleRecaptcha}
                      />
                    </RecaptchaWrapper>
                  )}
                  <FormButton disabled={!valid || loading}>{loading ? 'Sending..' : 'Send!'}</FormButton>
                </Form>
              </ContactsColumnPadding>
            </ContactsColumn>
          </ContactsContent>
        </ContactsPadding>
        <Modal
          ariaHideApp={false}
          style={modalStyles}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          isOpen={modal.open}>
          <Checkmark/>
          <p>{modal.message}</p>
        </Modal>
      </Section>
    );
  }
}

export const Contacts = () => (
  <StaticQuery query={graphql`
    query {
      site {
        siteMetadata {
          recaptcha {
            key
          }
        }
      }
      datoCmsContact {
        successMessage
        errorMessage
      }
    }
  `} render={(data: ContactsProps) => (
      <ContactsPure {...data}/>
  )}/>
);
