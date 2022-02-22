const startTransitionStyles = {
    top: 0,
    width: '120px',
    maxHeight: '40px',
    color: 'transparent',
    backgroundColor: '#5a564c',
  };
  
  const finishTransitionStyles = {
    top: '45px',
    width: '200px',
    maxHeight: '200px',
    backgroundColor: 'white',
  };
  
  const styles = {
    container: {
      position: 'relative',
    },
  
    display: {
      position: 'relative',
      zindex: '1',
      width: '120px',
      height: '40px',
      backgroundColor: '#5a564c',
      border: 'none',
      borderRadius: '5px',
      outline: 'none',
      cursor: 'pointer',
      transition: 'backgroundColor 350ms',
    },
  
    displayActive: {
      backgroundColor: '#000000',
    },
  
    listBody: {
      position: 'absolute',
      top: '20px',
      right:"-40px",
      zIndex: '999 !important',
      boxSizing: 'border-box',
      width: '250px',
      padding: '16px 24px',
      overflow: 'hidden',
      backgroundColor: 'white',
      borderRadius: '5px',
      boxShadow: "-1px 2px 8px 2px rgba(0,0,0,0.86)",
      // display:"flex",
      // justifyContent:"space-between",
      // alignItems:"center",
    },
  
    list: {
      padding: '0',
      listStyleType: 'none',
    },
  
    listItem: {
      padding: '5px 0',
    },
  
    listItemActive: {
      color: 'blue',
      transition: 'color 500ms',
    },
    listTransitionEnter: {
      ...startTransitionStyles,
    },
    listTransitionEnterActive: {
      ...finishTransitionStyles,
      transition: 'all 400ms',
    },
    listTransitionExit: {
      ...finishTransitionStyles,
    },
    listTransitionExitActive: {
      ...startTransitionStyles,
      transition: 'all 400ms',
    },
  };
  
  export default styles;
  