import myArray from "./observations.js";
import MyCell from "./MyCell.jsx";
import CellIcon from "./CellIcon.jsx";
import sortObservations from "./sort.js";
import { useState, useEffect, useRef } from 'react';

import cartCylinders from './img/cartCylinders.jpg';
import deterioratedSignage from './img/deterioratedSignage.jpg';
import electricalSurface from './img/electricalSurface.jpg';
import electrodeHolder from './img/electrodeHolder.jpg';
import exposedWire from './img/exposedWire.jpg';
import eyewashStationTag from './img/eyeWashStationTag.jpg';
import fireExtinguisherClearance from './img/fireExtinguisherClearance.jpg';
import fireExtinguisherTag from './img/fireExtinguisherTag.jpg';
import flammableCabinet from './img/flammableCabinet.jpg';
import forkliftForks from './img/forkliftForks.jpg';
import frayedSling from './img/frayedSling.jpg';
import hotArea from './img/hotArea.jpg';
import ladderLabel from './img/ladderLabel.jpg';
import leatherJacketDump from './img/leatherJacketDump.jpg';
import puddleBoots from './img/puddleBoots.jpg';
import SMAWmachineLOTO from './img/SMAWmachineLOTO.jpg';
import tapedTool from './img/tapedTool.jpg';
import washStation from './img/washStation.jpg';

function App() {
  const modalEl = useRef(); // To close modal when clicking outside it.

  useEffect(() => {

    const handler = (event) => {
      if (!modalEl.current) {
        return;
      }

      if (!modalEl.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", handler, true);
    
    return () => {
      document.removeEventListener("click", handler);
    };

  }, []);

  const images = {
    cartCylinders: cartCylinders,
    deterioratedSignage: deterioratedSignage,
    electricalSurface: electricalSurface,
    electrodeHolder: electrodeHolder,
    exposedWire: exposedWire,
    eyewashStationTag: eyewashStationTag,
    fireExtinguisherClearance: fireExtinguisherClearance,
    fireExtinguisherTag: fireExtinguisherTag,
    flammableCabinet: flammableCabinet,
    forkliftForks: forkliftForks,
    frayedSling: frayedSling,
    hotArea: hotArea,
    ladderLabel: ladderLabel,
    leatherJacketDump: leatherJacketDump,
    puddleBoots: puddleBoots,
    SMAWmachineLOTO: SMAWmachineLOTO,
    tapedTool: tapedTool,
    washStation: washStation
  }

  const sortedObservations = sortObservations(myArray);

  const [currImg, setCurrImg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const start = (x) => {
    setCurrImg(x);
    setShowModal(true);
  }

  const addUniqueId = (thing1) => { // Add a unique # ID to each row.
    return thing1.map((item, index) => {
      return {
        ...item,
        id: `${index + 1}`,
      };
    });
  };

  const updatedObjects = addUniqueId(sortedObservations);

  function CellImg(props) {
    const x = props.props;
    if (x.imgFileName) {
      return (
        <button type="button" className="btn btn-primary" onClick={() => start(x.imgFileName)} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera2" viewBox="0 0 16 16"> <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4" /> <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0" /> </svg>
        </button>
      )
    }
  }

  function FirstCell(props, index){
    const x = props.props;
    const y = x.obs;
    if (y.serious){
      return <td className="bg-danger rounded">{x.index+1}</td>
    }
    return <td> {x.index+1} </td>
  }

  const listItems = updatedObjects.map((obs, index) =>
    
    <tr key={index} className="align-middle">

      <FirstCell props={{obs, index}} />

      <td>
        <CellImg props={obs} />
      </td>

      <td>
        <CellIcon props={obs.authType}/>
      </td>

      <td>
        <MyCell props={obs.references}/>
      </td>

      <td>
        <MyCell props={obs.observations} />
      </td>

      <td>
        <MyCell props={obs.recommendations} />
      </td>

    </tr>
  );

  // Begin final <App/> return statement.
  return (<>
    <table className="table table-hover">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>Reference</th>
          <th>Observation</th>
          <th>Recommendation</th>
        </tr>
      </thead>

      <tbody>
        {listItems}
      </tbody>
    </table>

    { showModal &&
        <div className="modal show d-block">
          <div className="modal-dialog">
            <div className="modal-content" ref={modalEl}>

              <div className="modal-header">

                <button className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>

                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>

              </div>

              <div className="modal-body">
                <img src={ images[currImg] } className="w-100" alt="safety image" />
              </div>
              
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      }
  </>)
}

export default App;
