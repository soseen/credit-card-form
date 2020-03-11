import React, { useState } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import CardBackgroundCarousel from "./CardBackgroundCarousel";
import CardForm from "./CardForm";
import artTemplates from './artTemplates';

const Routes = () => {

    const [currentTemplate, setCurrentTemplate] = useState(artTemplates[8]);

    const setTemplate = (template) => {
        console.log('current template sent: ' + template.id)
        setCurrentTemplate(template);
    }

  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route exact path="/credit-card-form/">
          <CardBackgroundCarousel sendTemplate={setTemplate}/>
        </Route>
        <Route path="/credit-card-form/form">
          <CardForm chosenTemplate={currentTemplate} />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;