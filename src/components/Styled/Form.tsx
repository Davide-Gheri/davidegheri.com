import React, { FormEvent, PureComponent } from 'react';
import styled from 'styled-components';

export interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  onSubmit: (e: FormEvent<any>) => void;
}

const PureForm = styled.form`
  display: block;
`;

export class Form extends PureComponent<FormProps> {
  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const evt = e;
    return this.props.onSubmit(evt);
  };

  render() {
    const { onSubmit, ref, ...rest } = this.props;
    return (
      <PureForm onSubmit={this.onSubmit} {...rest}>{this.props.children}</PureForm>
    );
  }
}

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: flex;
  width: 100%;
  font-weight: bold;
  margin-bottom: .5rem;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  -webkit-appearance: none;-moz-appearance: none;appearance: none;
  border: solid 1px #dae1e7;
  border-radius: .25rem;
  line-height: 1.25;
  padding: .5rem .75rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
`;

export const FormTextarea = styled.textarea`
  display: block;
  width: 100%;
  -webkit-appearance: none;-moz-appearance: none;appearance: none;
  border: solid 1px #dae1e7;
  border-radius: .25rem;
  line-height: 1.25;
  padding: .5rem .75rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  resize: vertical;
`;

export const FormButton = styled.button`
  font-weight: bold;
  padding: .5rem 1rem;
  border-radius: .25rem;
  background: transparent;
  color: #fff;
  border-color: #4dc0b5;
  cursor: pointer;
  transition: all .1s;
  :hover {
    background: #4dc0b5;
  }
`;
