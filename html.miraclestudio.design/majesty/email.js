function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "batuhanarik123@gmail.com",
        Password : "36ADA391CFD908AF9E88ECE7BAEBDBF6B4CB",
        To : 'batuhanarik123@gmail.com',
        From : "batuhanarik123@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}