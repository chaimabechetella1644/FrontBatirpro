import React, { useState } from 'react';
import axios from 'axios';
import starfull from './images/fullstart.png';
import starempty from './images/emptystar.png';
import './addreview.css';

function Addreview({ display, prof_id }) {
  const [state, setState] = useState({
    x: 0,
    star1: starempty,
    star2: starempty,
    star3: starempty,
    star4: starempty,
    star5: starempty,
  });

  const [commentaire, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const star1 = state.star1;
  const star2 = state.star2;
  const star3 = state.star3;
  const star4 = state.star4;
  const star5 = state.star5;

  const change1 = () => setState({ x: 1, star1: starfull, star2: starempty, star3: starempty, star4: starempty, star5: starempty });
  const change2 = () => setState({ x: 2, star1: starfull, star2: starfull, star3: starempty, star4: starempty, star5: starempty });
  const change3 = () => setState({ x: 3, star1: starfull, star2: starfull, star3: starfull, star4: starempty, star5: starempty });
  const change4 = () => setState({ x: 4, star1: starfull, star2: starfull, star3: starfull, star4: starfull, star5: starempty });
  const change5 = () => setState({ x: 5, star1: starfull, star2: starfull, star3: starfull, star4: starfull, star5: starfull });

const token = localStorage.getItem('authToken')
console.log('token', token)
console.log("fron id prof",prof_id)
  const handleSubmit = async () => {
    if (!commentaire.trim() || state.x === 0) {
      alert('Please fill in all fields and select a rating.');
      return;
    }
    setIsSubmitting(true);
    if (!token) {
      alert('Please login to submit a review.');
      console.log("No token found.");
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/professionals/${prof_id}/review/`, {
        commentaire,
        note: state.x,
      },{
        headers: {
          'Content-Type'  : 'application/json',
          'Accept'        : 'application/json',
          'Authorization' :  `Token ${token}`
        },
        withCredentials: true 
      });
      console.log('Review submitted successfully:', response.data);
      alert('Review added successfully!');
      setComment('');
      setState({ x: 0, star1: starempty, star2: starempty, star3: starempty, star4: starempty, star5: starempty });
    } catch (error) {
      if(error.response.request.status === 401){
        alert('Unauthorized.please login to your account')
        return;
      }
      console.error('Error submitting review:', error);
      alert('An error occurred while submitting your review.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ display: display.addreview ? 'block' : 'none' }}>
      <div className="formcontainer">
        <p className='logwarning'>You need an account to write reviews</p>
        <div className="adreview">
          <textarea
            placeholder="commentaire..."
            value={commentaire}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="rateadd">
          <div className="noter">Noter sur 5</div>
          <div className="starfulling">
            <img src={star1} onClick={change1} alt="Star 1" />
            <img src={star2} onClick={change2} alt="Star 2" />
            <img src={star3} onClick={change3} alt="Star 3" />
            <img src={star4} onClick={change4} alt="Star 4" />
            <img src={star5} onClick={change5} alt="Star 5" />
          </div>
        </div>
        <div className="addreview">
          <button
            className="buttonadd"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            { isSubmitting ? 'Submitting...' : 'Ajouter un commentaire'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addreview;



// import React, { useState } from 'react'
// import starfull from './images/fullstart.png'
// import starempty from './images/emptystar.png'
// import './addreview.css'

// function Addreview({display}) {

  

// const [state , setState] = useState({x:0 , star1:starempty , star2:starempty, star3:starempty, star4:starempty, star5:starempty })
// const star1 = state.star1 ;
// const star2 = state.star2 ;
// const star3 = state.star3 ;
// const star4 = state.star4 ;
// const star5 = state.star5 ;


// const change1 = () => {
//     setState( (prevState)=>({ x:1 , star1: starfull , star2: starempty, star3: starempty, star4: starempty, star5: starempty}))
// }

// const change2 = () => {
//     setState( (prevState)=>({ x:2 , star1: starfull , star2: starfull , star3: starempty, star4: starempty, star5: starempty}))
// }

// const change3 = () => {
//     setState( (prevState)=>({  x:3 , star1: starfull , star2: starfull, star3: starfull, star4: starempty, star5: starempty}))
// }

// const change4 = () => {
//     setState( (prevState)=>({  x:4 , star1: starfull , star2: starfull, star3: starfull, star4: starfull, star5: starempty}))
// }

// const change5 = () => {
//     setState( (prevState)=>({ x:5 , star1: starfull , star2: starfull, star3: starfull, star4: starfull, star5: starfull}))
// }

// const submitReview = async () => {
//   if (!name.trim() || !comment.trim() || state.x === 0) {
//     alert('Please fill in all fields and select a rating.');
//     return;
//   }

//   try {
//     const response = await axios.post('/api/reviews', {
//       name,
//       comment,
//       rating: state.x,
//     });

//     console.log('Review submitted successfully:', response.data);
//     alert('Review added successfully!');
//     setName('');
//     setComment('');
//     setState({ x: 0, star1: starempty, star2: starempty, star3: starempty, star4: starempty, star5: starempty });
//   } catch (error) {
//     console.error('Error submitting review:', error);
//     alert('An error occurred while submitting your review.');
// };

//   return (
//     <div style={{display : display.addreview? 'block' : 'none'}} >
//       <div className="formcontainer">
//         <div className="nameadd">
//           <input type="text" placeholder='Nom et prenom' />
//         </div>
//         <div className="adreview">
//           <textarea placeholder='commentaire...' ></textarea>
//         </div>
//         <div className="rateadd">
//           <div className="noter">
//             Noter sur 5
//           </div>
//           {/* <div className="starfulling">
//             <img src={starfull} alt="" /> <img src={starfull} alt="" /><img src={starfull} alt="" /><img src={starfull} alt="" /><img src={starfull} alt="" />
//           </div> */}
          
// <div className='starfulling'>
//       <img src={star1} onClick={change1}/> <img src={star2} onClick={change2}/> <img src={star3} onClick={change3}/> <img src={star4} onClick={change4}/> <img src={star5} onClick={change5}/>
//                        </div>

//         </div>
//         <div className="addreview">
//             <div className="buttonadd" onClick={submitReview}>ajouter un commentaire </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Addreview