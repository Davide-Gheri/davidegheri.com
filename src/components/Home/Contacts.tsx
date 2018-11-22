import React from 'react';
import styled from 'styled-components';
import { Section } from '../Styled';
import { media } from '../../utils/styled';
import { graphql, StaticQuery } from 'gatsby';
import { ContactQuery } from '../../interfaces';

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
  return (
    <Section background="#2f365f">
      <ContactsPadding>
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactsContent>
          <ContactsColumn/>
          <ContactsColumn>
            <ContactsColumnPadding>
              <StaticQuery query={graphql`
                query {
                    datoCmsContact {
                        address
                        telephone
                        email
                    }
                }
              `} render={(data: ContactQuery) => {
                return (
                  <>
                    {data.datoCmsContact.address && (
                      <p dangerouslySetInnerHTML={{__html: data.datoCmsContact.address.replace(/\n{2}/g, '</p><p>')}}/>
                    )}
                    {data.datoCmsContact.telephone && (
                      <p>
                        <WhiteLink href={`tel:${data.datoCmsContact.telephone}`}>{data.datoCmsContact.telephone}</WhiteLink>
                      </p>
                    )}
                    {data.datoCmsContact.email && (
                      <p>
                        <WhiteLink href={`mailto:${data.datoCmsContact.email}`}>{data.datoCmsContact.email}</WhiteLink>
                      </p>
                    )}
                  </>
                );
              }}/>
            </ContactsColumnPadding>
          </ContactsColumn>
        </ContactsContent>
      </ContactsPadding>
    </Section>
  );
};
