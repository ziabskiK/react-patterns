import React from 'react'
import Loading from '../Loading/Loading'

export default (WrappedComponent) => {
    const hocComponent = ({ loading, ...props }) => {

        if (loading) {
            return <Loading />
        }
        return <WrappedComponent {...props} />

    }

    return hocComponent
}
