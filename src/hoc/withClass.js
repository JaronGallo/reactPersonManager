import React from 'react';

// This higher order component has the purpose of adding a div with a certain CSS class around any element
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;