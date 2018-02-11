import React from 'react';
import { connect } from "react-redux";
import classNames from 'classnames';
import css from '../../css/components/Home.css';

import { fetchCareers } from '../actions/actionCareers';
import { resetLevel } from '../actions/actionLevel';
import { resetRenown } from '../actions/actionRenown';
import { resetTacticLimit } from '../actions/actionTacticLimit';
import { resetPoints } from '../actions/actionPoints';
import { resetCurrentPoints } from '../actions/actionCurrentPoints';
import { resetCoreAbilities } from '../actions/actionCoreAbilities';
import { resetCoreMorale1 } from '../actions/actionCoreMorale1';
import { resetCoreMorale2 } from '../actions/actionCoreMorale2';
import { resetCoreMorale3 } from '../actions/actionCoreMorale3';
import { resetCoreMorale4 } from '../actions/actionCoreMorale4';
import { resetCoreTactics } from '../actions/actionCoreTactics';
import { resetAbilities } from '../actions/actionAbilities';
import { resetAbilitiesObject } from '../actions/actionAbilitiesObject';
import { resetSelectedMorale1 } from '../actions/actionSelectedMorale1';
import { resetSelectedMorale2 } from '../actions/actionSelectedMorale2';
import { resetSelectedMorale3 } from '../actions/actionSelectedMorale3';
import { resetSelectedMorale4 } from '../actions/actionSelectedMorale4';
import { resetSelectedTactics } from '../actions/actionSelectedTactics';
import { resetMasteryAbilities } from '../actions/actionMasteryAbilities';
import { resetMasteryMorales } from '../actions/actionMasteryMorales';
import { resetMasteryTactics } from '../actions/actionMasteryTactics';

import Masthead from './Masthead';
import Sidebar from './Sidebar';
import Overlay from './Overlay';
import News from '../components/News';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCareers();

    // Reset career selections/attributes/abilities
    this.props.resetLevel();
    this.props.resetRenown();
    this.props.resetTacticLimit();
    this.props.resetPoints();
    this.props.resetCurrentPoints();
    this.props.resetCoreAbilities();
    this.props.resetCoreMorale1();
    this.props.resetCoreMorale2();
    this.props.resetCoreMorale3();
    this.props.resetCoreMorale4();
    this.props.resetCoreTactics();
    this.props.resetAbilities();
    this.props.resetAbilitiesObject();
    this.props.resetSelectedMorale1();
    this.props.resetSelectedMorale2();
    this.props.resetSelectedMorale3();
    this.props.resetSelectedMorale4();
    this.props.resetSelectedTactics();
    this.props.resetMasteryAbilities();
    this.props.resetMasteryMorales();
    this.props.resetMasteryTactics();
  }

  render() {
    const copyClass = classNames({
      [css.copy]: true,
      'marginBottom--large': true,
      'marginTop@mobile': true,
      'marginTop--medium': true,
      marginRight: true,
      'marginLeft@mobile': true,
    });
    const githubUrl = 'https://github.com/mattyrichards/ror-career-builder';
    const githubUrlIssues = `${githubUrl}/issues`;
    return (
      <div className="heightFull">
        <div className={css.wrapper}>
          <div className={css.container}>
            <Masthead />
            <div className="grid">
              <div className="grid-col-1-3 grid-col-1@mobile">
                <div className="marginTop--medium marginTop@mobile marginLeft--medium marginLeft@mobile marginRight--medium marginRight@mobile marginBottom--medium marginBottom--none@mobile">
                  <News />
                </div>
              </div>
              <div className="grid-col-2-3 grid-col-1@mobile">
                <div className={copyClass}>
                  <p className={css.copyText}>Warhammer Online: Age of Reckoning has returned.
                  Resurrected by volunteers on a private server, we now have <a className={css.copyLink} href="http://www.returnofreckoning.com" target="blank">Return of Reckoning</a>.
                  Inspired by the work of these developers comes RoR Career Builder.</p>
                  <p className={css.copyText}>This web app aims to replace and improve upon the great work done by <a className={css.copyLink} href="http://waronlinebuilder.org" target="blank">Warhammer Online Career Builder</a> back in 2013.</p>
                  <p className={css.copyText}>Details of updates will appear on this page.</p>
                  <p className={css.copyText}>All code is available on <a href={githubUrl} className={css.copyLink} target="blank">Github</a>
                  . Feel free to fork, contribute, <a href={githubUrlIssues} className={css.copyLink} target="blank">raise bugs and make suggestions</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Overlay overlayVisible={true} />
        <Sidebar />
      </div>
    );
  }
}

export default connect(null, { 
  fetchCareers,
  resetRenown,
  resetLevel, 
  resetTacticLimit,
  resetPoints,
  resetCurrentPoints,
  resetCoreAbilities,
  resetCoreMorale1,
  resetCoreMorale2,
  resetCoreMorale3,
  resetCoreMorale4,
  resetCoreTactics,
  resetAbilities,
  resetAbilitiesObject,
  resetSelectedMorale1,
  resetSelectedMorale2,
  resetSelectedMorale3,
  resetSelectedMorale4,
  resetSelectedTactics,
  resetMasteryAbilities,
  resetMasteryMorales,
  resetMasteryTactics
})(Home);