import React, { useState } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import TemplatesSlider from './TemplatesSlider';
import CardForm from './CardForm';
import ResultDisplay from './ResultDisplay';
import ErrorRoute from './ErrorRoute';

const Routes = () => {

  const defaultForm = {
    cardNumber1: {value: ''},
    cardNumber2: {value: ''},
    cardNumber3: {value: ''},
    cardNumber4: {value: ''},
    cardHolder: {value: ''},
    cardMonth: {value: '01'},
    cardYear: {value: '20'},
    cardCVV: {value: ''}
  }


    const [template, setTemplate] = useState();
    const [form, setForm] = useState(defaultForm);

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
        <Route exact path='/credit-card-form/'>
          <TemplatesSlider chooseTemplate={chooseTemplate}/>
        </Route>
        <Route exact path='/credit-card-form/form'>
          <CardForm submitCard={submitCard} template={template}/>
        </Route>
        <Route exact path='/credit-card-form/result'>
          <ResultDisplay form={form} template={template}/>
        </Route>
        <Route>
          <ErrorRoute />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;