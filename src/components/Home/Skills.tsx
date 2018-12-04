import React, { PureComponent } from 'react';
import Typist from 'react-typist';
import { shuffleArray } from '@utils';

export interface SkillsProps {
  skills: string[];
}

export interface SkillsState {
  skill: string | null;
  i: number;
  typing: boolean;
}

export default class Skills extends PureComponent<SkillsProps, SkillsState> {
  private timeout: any;

  state: SkillsState = {
    skill: this.props.skills[0],
    i: 1,
    typing: true,
  };

  public componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  public render() {
    const { typing, skill } = this.state;
    return (
      <h2>
        <span className="typings inline-block">
          {typing && <Typist onTypingDone={this.onTypingDone}>
            <Typist.Delay ms={500} />
            {skill}
          </Typist>}
        </span> Developer
      </h2>
    );
  }

  private onTypingDone = () => {
    this.timeout = setTimeout(() => {
      const { i } = this.state;
      const { skills } = this.props;
      let newI = i;
      let newSkill;
      if (skills[i]) {
        newSkill = skills[i];
        newI = newI + 1;
      } else {
        newSkill = skills[0];
        newI = 1;
      }
      this.setState({skill: newSkill, i: newI, typing: false}, () => this.setState({typing: true}));
    }, 3100);
  }
}
