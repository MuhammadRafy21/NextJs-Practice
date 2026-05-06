import Image from "next/image"

export default function tabs(){
return(
 
<div className="  tab w-3xl h-7 bg-white">
      <span></span>
      <br/>
      <hr></hr>
      <div className="bill">
        <div className="icons grid grid-cols-2 gap-4">
            <div className="invo-icon">
          <Image
          src="/invoice.png"
          alt="Picture Is anavalaible"
          width={20}
          height={20}
          /> 
          <p>invoice</p>
          </div> 
          <div className="invo-icon">
          <Image
          src="/payments.png"
          alt="Picture Is anavalaible"
          width={20}
          height={20}
          /> 
          <p>Payment</p>
          </div> <div className="invo-icon">
          <Image
          src="/checkout.png"
          alt="Picture Is anavalaible"
          width={20}
          height={20}
          /> 
          <p>checkout</p> 
          </div> <div className="invo-icon">
          
        <Image
          src="/billing.png"
          alt="Picture Is anavalaible"
          width={20}
          height={20}
          /> 
          <p>billing</p>
          </div> 
        
        
        
        </div>
        <div></div>
        <div></div>
      </div>
      <div>
        
      </div>
      <div></div>
     </div>
)
}

