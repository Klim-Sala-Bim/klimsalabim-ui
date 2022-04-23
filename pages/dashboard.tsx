import type { NextPage } from 'next';
import { useState } from 'react';
import { Card } from '../components/Card';

const Dashboard: NextPage = () => {

    /** "selected" here is state variable which will hold the
   * value of currently selected dropdown.
   */
     const [selected, setSelected] = useState<String>();
  
     /** Function that will set different values to state variable
      * based on which dropdown is selected
      */
     const changeSelectOptionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
       setSelected(value);
     };

          /** This will be used to create set of options that user will see */
      let options = null;
      
      /** Setting options variable according to dropdown */
      if (selected === "Chennai") {
        options = "MAA";
      } else if (selected === "Gothenburg") {
        options = "GOT";
      } else if (selected === "Istanbul") {
        options = "IST";
      } else if (selected === "Manchester") {
        options = "MAN";
      } else if (selected === "Zurich") {
        options = "ZUR";
      }
  
  
  return (
    <>
      <h1>Choose your Origin location below</h1>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '4em 3em'}}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <form>
        <div>
          {/** Bind changeSelectOptionHandler to onChange method of select.
           * This method will trigger every time different
           * option is selected.
           */}
          <select onChange={changeSelectOptionHandler}>
            <option>Choose...</option>
            <option>Chennai</option>
            <option>Gothenburg</option>
            <option>Istanbul</option>
            <option>Manchester</option>
            <option>Zurich</option>
          </select>
        </div>
        <div>
          <select>
            {
              /** This is where we have used our options variable */
              options
            }
          </select>
        </div>
      </form>
    </>
  );
};

export default Dashboard;
