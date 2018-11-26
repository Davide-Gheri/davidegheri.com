import React from 'react';
import styled from 'styled-components';
import { Section } from '../Styled';
import { media } from '../../utils/styled';
import { Form, FormGroup, FormInput, FormLabel, FormTextarea, FormButton } from '../Styled/Form';

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

export const Contacts = () => {
  const onSubmit = () => {
    console.log('ciao');
  };

  return (
    <Section background="#2f365f">
      <ContactsPadding>
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactsContent>
          <ContactsColumn/>
          <ContactsColumn>
            <ContactsColumnPadding>
              <Form onSubmit={onSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <FormGroup>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput type="email" name="email" id="email" required={true} placeholder="foo@bar.baz"/>
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormTextarea name="message" id="message" placeholder="Write me!"/>
                </FormGroup>
                <input type="hidden" name="bot-field" />
                <FormButton>Send!</FormButton>
              </Form>
            </ContactsColumnPadding>
          </ContactsColumn>
        </ContactsContent>
      </ContactsPadding>
    </Section>
  );
};
