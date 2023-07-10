import React from 'react'
import { Form } from "react-bootstrap";
import { useState , useEffect } from "react";
import './Forms.css'
export const FormItem =  React.memo( ({ item, onChange, answer})  => {

  const handleChange = (value,key,checked) => {
    
    onChange(value, item.key, item.type,checked);
  }

   switch (item.type) {
      case 'text':
        return (
          <>
                <Form.Label className='formLabel'>{item.label}</Form.Label>
                <Form.Control 
                  type="text"
                  id={item.label}
                  onChange={(e) => handleChange(e.target.value, item.key)}
                  value={answer}
                />
          </>
        )
        break;
      case 'textarea':
          return (
            <>
                  <Form.Label className='formLabel'>{item.label}</Form.Label>
                  <Form.Control
                    as="textarea" rows={3}  
                    id={item.label}
                    onChange={(e) => handleChange(e.target.value, item.key)}
                    value={answer}
                  />
            </>
          )
          break;
      case 'radio':
          return (
            <>
                  <Form.Label className='formLabel'>{item.label}</Form.Label>
                  <Form.Group controlId={item.key}>
                    {
                      item.options.map((opt, index) => {
                        return (
                          <Form.Check
                            value={opt.id}
                            type="radio"
                            aria-label={opt.name}
                            label={opt.name}
                            onChange={(e)=>handleChange(e.target.value, item.key ,item.type)}
                            checked={answer == opt.id}
                          />
                        )
                      })
                    }
                   
                  </Form.Group>
            </>
          )
          break;
      case 'checkbox':
            return (
              <>
                    <Form.Label className='formLabel'>{item.label}</Form.Label>
                    <Form.Group controlId={item.key}>
                      {
                        item.options.map((opt, index) => {
                          return (
                            <Form.Check
                              value={opt.id}
                              type="checkbox"
                              aria-label={opt.name}
                              label={opt.name}
                              onChange={(e)=>handleChange(e.target.value, item.key , e.target.checked)}
                            />
                          )
                        })
                      }
                     
                    </Form.Group>
              </>
            )
            break;
      case 'number':
          return (
            <>
              <Form.Label className='formLabel'>{item.label}</Form.Label>
              <Form.Control
                type="number"
                id={item.label}
                onChange={(e) => handleChange(e.target.value, Number(item.key))}
                value={answer}
              />
            </>
          )
          break;
      case 'password':
        return (
          <>
            <Form.Label className='formLabel' htmlFor="inputPassword5">{item.label}</Form.Label>
            <Form.Control
              type="password"
              id={item.label}
              aria-describedby="passwordHelpBlock"
              onChange={(e) => handleChange(e.target.value, item.key)}
            />
          </>
        )
        break;
     case 'date':
          return (
            <>
              <Form.Label className='formLabel' >{item.label}</Form.Label>
              <Form.Control
                type="date"
                id={item.label}
                value={answer}
                onChange={(e) => handleChange(e.target.value, item.key)}
              />
            </>
          )
          break;
      case 'information':
        return (
          <p>
            {item.label}
          </p>
        )
      case 'select':
        return (
          <>
            <Form.Label className='formLabel'>{item.label}</Form.Label>
            <Form.Select disabled={item.disabled}  aria-label={item.label} value={answer} 
            onChange={(e) => handleChange(e.target.value, item.key)}>
              <option value={'undefined'} style={{backgroundColor:'grey'}}> {item.label}</option>
              {
                item.options.map((opt, index) => {
                  return (
                    <option  value={opt.id}>{opt[item.fieldName]}</option>
                  )
                })
              }
            </Form.Select>
          </>
        )

      return (
        <></>
      )
    }
  })
