import React, { Component } from 'react'
import FetchError from '../FetchError/FetchError';


export default (WrappedComponent) => {
    const hocComponent = ({ error, ...props }) => {

        if (error) {
            return <FetchError />
        }
        return <WrappedComponent {...props} />

    }

    return hocComponent
}
