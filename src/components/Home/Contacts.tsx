import React, { ChangeEvent, PureComponent } from 'react';
import styled from 'styled-components';
import { Section } from '../Styled';
import { media } from '../../utils/styled';
import { Form, FormGroup, FormInput, FormLabel, FormTextarea, FormButton } from '../Styled/Form';
import { encode } from '../../utils';

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
`;

const ContactsColumn = styled.div`
  width: 100%;
  ${media.md`width: 50%`};
`;

const ContactsColumnPadding = styled.div`
  padding: 1.5rem;
  line-height: 1.5;
`;

const WhiteLink = styled.a`
  color: #ffffff;
`;

interface ContactsState {
  fields: {
    email: string;
    message: string;
    [key: string]: string;
  };
  loading: boolean;
}

export class Contacts extends PureComponent<{}, ContactsState> {
  state: ContactsState = {
    fields: {
      email: '',
      message: '',
    },
    loading: false,
  };

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fields = Object.assign({}, this.state.fields);
    fields[name] = value;
    this.setState({fields});
  };

  onSubmit = () => {
    console.log('ciao');
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state.fields }),
    }).then(res => alert('Success!1!'))
      .catch(err => alert(err));
  };

  render() {
    const { email, message } = this.state.fields;
    return (
      <Section background="#2f365f">
        <ContactsPadding>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactsContent>
            <ContactsColumn/>
            <ContactsColumn>
              <ContactsColumnPadding>
                <Form onSubmit={this.onSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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
                  <FormButton>Send!</FormButton>
                </Form>
              </ContactsColumnPadding>
            </ContactsColumn>
          </ContactsContent>
        </ContactsPadding>
      </Section>
    );
  }
}
