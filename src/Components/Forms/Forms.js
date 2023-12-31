import React, { useEffect, useState } from 'react'
import './Forms.css';
import {getFormQuestions} from './FormData.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FormItem } from './FormItem';
import { useDispatch, useSelector } from 'react-redux';

function Forms() {
  const [FormQuestions, setFormQuestions] = useState( getFormQuestions());
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const ProductsFromApi = useSelector(state => state.ProductsReducer);
  const QuotesFromApi = useSelector(state => state.QuotesReducer);

  const saveAnswers = (value,category,type,checked) => {
    if(category=='Desired Product')
    {
      if(value=='undefined')
      {
        FormQuestions[0].items[3].disabled = true;
      }
      else
      {
        FormQuestions[0].items[3].disabled = false;
      }
      if(FormQuestions[0].items[3].options.length==0)
      dispatch({type:'GET_QUOTES_REQUESTED'});
    }
    if(type=='checkbox')
    {
      if (checked) {
            if( answers[category]=="")  answers[category]=[];
            answers[category].push(value);
      } else {
            answers[category] = answers[category].filter((item) => item !== value)
      }
      setAnswers({...answers});
    }
    else{
        let ans = {...answers,[category]:value};
        setAnswers(ans);
    }
    
    
  }

  const reset = () => {
    FormQuestions.map((formSection)=>{
        formSection.items.map((item)=>{
            answers[item.key] = '';
            errors[item.key] = '';
        })
    })
    setAnswers({...answers});
    setErrors({...errors});
  }

  useEffect(() => {
    //INITIAL
    dispatch({type:'GET_PRODUCTS_REQUESTED'});
    reset();
  }, [])

  useEffect(() => {
    if(ProductsFromApi?.loading == false)
    {
      FormQuestions[0].items[2].options=ProductsFromApi.data;
      setFormQuestions([...FormQuestions]);
    }
  }, [ProductsFromApi])
  
  useEffect(() => {
    if(QuotesFromApi?.loading == false)
    {
      FormQuestions[0].items[3].options=QuotesFromApi.data;
      FormQuestions[0].items[3].disabled = false;
      console.log(FormQuestions[0].items[3])
      setFormQuestions([...FormQuestions]);
    }
  }, [QuotesFromApi])
  

  const submit = () => {
     for(let key in answers)
     {
        if(answers[key]=='' || answers[key]==undefined)
        {
            errors[key] = key+' field is required.';
        }
        else
        {
            if(errors[key]!='')
            errors[key]='';
        }
        setErrors({...errors})
     }
     console.log(answers)
  }

  return (
    <div>
       <h1>Forms</h1>
       <div className='d-flex flex-column'>
            <div className='d-flex'>
                {
                    FormQuestions.map((formSection,sectionIndex)=>
                    (
                        <div key={`FormSection_${formSection.section}`} className='col-4 '>
                        {
                            formSection.items?.map((item, index) => {
                                return (
                                            <div key={`FormItem_${item.label}`} style={{paddingLeft:'10px',paddingRight:'10px'}} >
                                                        
                                                <FormItem  answer={answers[FormQuestions[sectionIndex].items[index].key]}
                                                currentItemIndex={index} onChange={saveAnswers} key={`${index}_${item.label}`} item={item} />
                                                <em style={{color:'red',fontSize:'11px'}}>{errors[FormQuestions[sectionIndex].items[index].key]}</em>
                                                <hr></hr>   
                                            </div>      
                                           
                                        )
                                        })
                        }
                        </div>
                    )
                    )
                }
                
            </div>
            <hr></hr>
            <div className='d-flex justify-content-around'>
            <Button onClick={()=>submit()} variant="primary">Submit</Button>
            <Button onClick={()=>reset()} variant="primary">Reset</Button> 
            </div>
      </div>
    </div>
  )
}

export default Forms
