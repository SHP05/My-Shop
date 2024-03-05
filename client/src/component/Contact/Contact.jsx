import Navbar from "../Navbar/NavbarNew/NavbarResp";


const Contact = () =>{
    return(
        <>
        <Navbar/>
  <div class="container my-5 contact">
    <center><h3>Have a question or need assistance? Feel free to reach out to us using the contact form below, and our dedicated team will get back to you as soon as possible!</h3></center>
    <form  action="https://formspree.io/f/mzblzegg"
    method="POST" class="m-auto">
    <h1 class="text-center">Contact US</h1>
      <div class="mb-3" >
        <label for="exampleInputEmail1" class="form-label">Your Email address</label>
        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Your Name</label>
        <input type="text" name="name" class="form-control" id="exampleInputPassword1"/>
      </div>
      <label for="floatingTextarea2">Leave a comment here</label>
      <div class="form-floating ">
        <textarea class="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height": "100px"}}></textarea>
      </div>
      <center><button type="submit" class="btn btn-dark my-3">Submit</button>
      </center>
    </form>
    <center><h1>Thank You</h1></center>
  </div>
        </>
    )
}

export default Contact;