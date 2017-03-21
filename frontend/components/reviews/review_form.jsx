import React from 'react';
import Stars from 'react-stars';
import { Link, hashHistory } from 'react-router';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStars = this.updateStars.bind(this);
    this.clearReviewForm = this.clearReviewForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.state = {
      title: "",
      body: "",
      rating: "",
      listing_id: this.props.listingId,
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateStars(newRating) {
    this.setState({
      rating: newRating
    });
  }

  toggleReviewForm(){
    let newformVisible = this.state.formVisible;
    newformVisible === true ? newformVisible = false : newformVisible = true;
    this.setState({
      formVisible: newformVisible
    });
  }

  clearReviewForm() {
     this.setState({
       title: "",
       body:"",
       rating: 0
     });
 }

 renderErrors() {
   if (this.props.reviewErrors === undefined){
     return(<div></div>);
   } else {
     return(
       <div>
         {this.props.reviewErrors.map((error, i) => (
           <p key={`error-${i}`}>
             {error}
           </p>
         ))}

       </div>
     );
   }
 }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
    this.clearReviewForm();
  }

  displayReviewForm(){
    return(
    <div className="review-form">
      <div>

      </div>
     <div>
       {this.renderErrors()}
       <h3>Write a Review</h3>
       <form onSubmit={this.handleSubmit}>
         <div>
           <h2 className="rating">How Was Your Host?</h2>
             <Stars
               className="stars"
               count={5}
               char={"⚙"}
               size={32}
               value={this.state.rating}
               onChange={this.updateStars}
               color1={'#585c6c'}
               color2={'#b48395'} />
           </div>
           <div className="title">
           <input
             className="standard-input"
             type="text"
             value={this.state.title}
             placeholder="Title"
             onChange={this.update('title')} />
         </div>
           <div className="body ">
           <textarea
             className="standard-input"
             value={this.state.body}

             onChange={this.update('body')}
             placeholder="Tell us about your host..." />
         </div>

         <span >
           <button className ="form-button" onClick={this.handleSubmit} type="submit">Submit</button>
           <button className='header-button' onClick={this.clearReviewForm}>Cancel</button>

         </span>
       </form>
     </div>
   </div>
  );
  }


  render () {

    return(<div className="review-form">
      {this.renderErrors()}
     <div>
       <h3>Write a Review</h3>
       <form onSubmit={this.handleSubmit}>
         <div>
           <h2 className="rating">How Was Your Host?</h2>
             <Stars
               className="stars"
               count={5}
               char={"⚙"}
               size={32}
               value={this.state.rating}
               onChange={this.updateStars}
               color1={'#585c6c'}
               color2={'#b48395'} />
           </div>
           <div className="title">
           <input
             className="standard-input"
             type="text"
             value={this.state.title}
             placeholder="Title"
             onChange={this.update('title')} />
         </div>
           <div className="body ">
           <textarea
             className="standard-input"
             value={this.state.body}

             onChange={this.update('body')}
             placeholder="Tell us about your host..." />
         </div>

         <span >
           <button className ="form-button" onClick={this.handleSubmit} type="submit">Submit</button>
           <button className='header-button' onClick={this.clearReviewForm}>Cancel</button>

         </span>
       </form>
     </div>
   </div>
  );
  }
}

export default ReviewForm;
