import ansi from "./icons/ansi.svg";
import calLaw from "./icons/calLaw.svg";
import ecfr from "./icons/ecfr.svg";

function CellIcon(props){
  const x = props.props
    if(x == "osha"){
      return<img src={ecfr} style={{width: "25px"}} className="me-2" />
    }
    else if(x == "ANSI"){
      return<img src={ansi} style={{width: "25px"}}  className="me-2"/>
    }
    else if(x == "state"){
      return<img src={calLaw} style={{width: "25px"}}  className="me-2"/>
    }
    else if (x == "textbook"){
      return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="me-2 mt-2" viewBox="0 0 16 16">
      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
    </svg>
    }
    else if (x == "anecdote"){
      return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="me-2 mt-2" viewBox="0 0 16 16">
      <path d="M8.5 0A5.5 5.5 0 0 0 3 5.5v7.047a3.453 3.453 0 0 0 6.687 1.212l.51-1.363a4.6 4.6 0 0 1 .67-1.197l2.008-2.581A5.34 5.34 0 0 0 8.66 0zM7 5.5v2.695q.168-.09.332-.192c.327-.208.577-.44.72-.727a.5.5 0 1 1 .895.448c-.256.513-.673.865-1.079 1.123A9 9 0 0 1 7 9.313V11.5a.5.5 0 0 1-1 0v-6a2.5 2.5 0 0 1 5 0V6a.5.5 0 0 1-1 0v-.5a1.5 1.5 0 1 0-3 0"/>
    </svg>
    }
    else if (x == "observation"){
      return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="me-2 mt-2" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
    </svg>
    }
    else return null
  }

  export default CellIcon;