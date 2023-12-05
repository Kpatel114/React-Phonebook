import React from 'react'
import { server_calls } from '../api/server';
import { useState, useEffect } from 'react'

// Use - syntax for a hook 
// React has 11 hooks
// custom built forms company or users 

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    //useEffect Hook from react
    useEffect( () => {
        handleDataFetch();
    }, [])
    // empty array what these do - without the empty array page will refresh 
    // - with the empty array  it will occur - onmount 

    // when our component comes into existence in the virutal dom - overview of everythin in the application
    // the useeffect hook will occur once
    // if  we add a component in the empty array - it will look for changed on that specific compoennt on our page
    // if the selected compoenent changes thyen the hook will load/ run

  return {
    contactData, getData:handleDataFetch
  }}
