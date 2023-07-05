import { useState } from "react";
import style from "./FormComponent.module.css";

export default function FormComponent(props) {
    const CURRENT = 'current'
    const YEARLY = 'yearly'
    const EXPECTED = 'expected'
    const INVESTMENT_DURATION = 'duration';

    const [formValues, setFormValues] = useState({
        currentSavings:'',
        yearlySavings:'',
        expectedInterest:'',
        investmentDuration:''
    });


    const onFormSubmitHandler = (e)=>{
        e.preventDefault();
        props.handler(formValues);
    }

    const onInputListener = (origin,e)=>{
        const value = e.target.value;
        if(origin == CURRENT){
            setFormValues((prevValues)=>{
                return {...prevValues,currentSavings:value}
            })
        }
        else if(origin == YEARLY){
            setFormValues((prevValues)=>{
                return {...prevValues,yearlySavings:value}
            })
        }
        else if(origin == EXPECTED){
            setFormValues((prevValues)=>{
                return {...prevValues,expectedInterest:value}
            })
        }
        else if(origin == INVESTMENT_DURATION){
            setFormValues((prevValues)=>{
                return {...prevValues,investmentDuration:value}
            })
        }
    }

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={style.inputgroup}>
        <p>
          <label className={style.label} htmlFor="current-savings">
            Current Savings($)
          </label>
          <input onChange={(e)=>{onInputListener(CURRENT,e)}} className={style.input} type="number" id="current-savings" />
        </p>

        <p>
          <label className={style.label} htmlFor="yearly-contribution">
            Yearly Savings ($)
          </label>
          <input onChange={(e)=>{onInputListener(YEARLY,e)}} className={style.input} type="number" id="yearly-contribution" />
        </p>
      </div>

      <div className={style.inputgroup}>
        <p>
          <label className={style.label} htmlFor="expected-return">
            Expected Interest (%, Per year)
          </label>
          <input onChange={(e)=>{onInputListener(EXPECTED,e)}} className={style.input} type="number" id="expected-return" />
        </p>

        <p>
          <label className={style.label} htmlFor="duration">
            INVESTMENT DURATION (YEARS)
          </label>
          <input onChange={(e)=>{onInputListener(INVESTMENT_DURATION,e)}} className={style.input} type="text" id="duration" />
        </p>
      </div>
      <p className="actions">
          <button type="reset" className={style.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={style.button}>
            Calculate
          </button>
        </p>
    </form>
  );
}
