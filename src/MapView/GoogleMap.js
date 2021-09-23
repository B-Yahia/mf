// import React ,{Component} from 'react';
// import {GoogleApiWrapper ,Map ,GoogleApiWrapper} from 'google-maps-react';


// export class MapContainer extends Component {
//     state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},
//     };
   
//     onMarkerClick = (props, marker, e) =>
//       this.setState({
//         selectedPlace: props,
//         activeMarker: marker,
//         showingInfoWindow: true
//       });
   
//     onMapClicked = (props) => {
//       if (this.state.showingInfoWindow) {
//         this.setState({
//           showingInfoWindow: false,
//           activeMarker: null
//         })
//       }
//     };
   
//     render() {
//       return (
//         <Map google={this.props.google} initialCenter>
//           <Marker onClick={this.onMarkerClick}
//                   name={'Current location'} />
//         </Map>
//       )
//     }
//   }

//   export default GoogleApiWrapper({
//     apiKey: ("AIzaSyA_i85itGf4Sc-OkD0NkoRXsnNcLU6u3Hc") 
//   })(MapContainer)