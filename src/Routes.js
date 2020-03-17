import React, { useState } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import CardBackgroundCarousel from './CardBackgroundCarousel';
import CardForm from './CardForm';
import ResultDisplay from './ResultDisplay'
import artTemplates from './artTemplates';


const Routes = () => {

    const [template, setTemplate] = useState();
    const [form, setForm] = useState();

    const chooseTemplate = (template) => {
        console.log('current template sent: ' + template.id)
        setTemplate(template);
    }

    const submitCard = (form) => {
      setForm(form);
    }

  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route exact path='/credit-card-form/'>
          <CardBackgroundCarousel chooseTemplate={chooseTemplate}/>
        </Route>
        <Route path='/credit-card-form/form'>
          <CardForm submitCard={submitCard} template={template} />
        </Route>
        <Route path='/credit-card-form/result'>
          <ResultDisplay form={form} template={template}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;