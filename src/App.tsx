import { Wizard } from "./pages/ProductWizard/components/Wizard";
import { ProductWizardSteps } from "./pages/ProductWizard/types/productWizard.types";



function App() {

  return (
    <div className="min-h-screen bg-base-200/60">
      <h1>Wizard - </h1>
      <Wizard wizardSteps={ProductWizardSteps.steps} />
    </div>
  );
}

export default App;
