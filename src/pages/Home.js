
import cat1 from '../images/cat-laptop.gif'

export default function Home() {
    return (
      <div style={{
        maxWidth: "880px",
        display: "flex",
        alignItems: "center",
        gap: "40px", 
        justifyContent: "space-between",
        marginTop: "70px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>

        <h1 style={{
          fontSize: "26px",
          textAlign: "left",
          lineHeight: "1.6",
        }}>
        Hello, this is your <b>PhoneBook.</b>   It is designed to help your brain not remember numbers, but write them down. Create your own unique account and get the opportunity to record your contacts.
        </h1>

        <img src={cat1} alt="phone" width='300px' height='300px'/>

        
      </div>
    );
  }