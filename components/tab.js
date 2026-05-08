import Image from "next/image"

export default function tabs(){
return(
 
<div className=" tab w-3xl h-7 bg-white">
      <span className="dot"></span>
      <br/>
      <hr></hr>
      <div className="container">
      <div className="bill">
        <div className="icons grid grid-cols-2 gap-2">
          
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
          </div> 
          
         

          <div className="invo-icon">
          <Image
          src="/checkout.png"
          alt="Picture Is anavalaible"
          width={20}
          height={20}
          /> 
          <p>checkout</p> 
          </div> 
          <div className="invo-icon">
          
        <Image
          src="/billing.png"
          alt="Picture Is anavalaible"
          width={20}
          height={20}
          />  
          <p>billing</p>
          </div> 
         
        </div>

        <div className="amount">
        <p>$31,850.00 <br/> <span>Due Oct 24, 2023</span></p>
        <Image
        src="/invoice.png"
        alt="This Picture Is anavailable"
        width={25}
        height={25}
        />
        </div>
        <div className="card-bill">
          <Image
          src="/card.png"
          alt="This Picture is anavailable"
          width={270}
          height={200}
          />
          <h2>Uxercon Icon Set</h2>
          <span className="text-purple-800"> Https//:buy.orbiz.com/pay/Tcydio...</span>
        </div>
      </div>


      <div> 
<div className="bg-white inputs rounded-2xl shadow-xl p-6 w-87.5">

      {/* Logo / Title */}
      <div className="flex items-center justify-center mb-4">
        <div className="bg-gray-100 p-3 rounded-xl">
          <span className="font-bold text-lg">U</span>
        </div>
      </div>

      <h2 className="text-center font-semibold text-lg mb-4">
        Uxercon Icon Set
      </h2>

      {/* Email */}
      <div className="mb-3">
        <label className="text-sm text-gray-600">Email address</label>
        <input
          type="email"
          placeholder="johndoe@mail.com"
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Card Details */}
      <div className="mb-3">
        <label className="text-sm text-gray-600">Card details</label>
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            placeholder="Card number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none"
          />
          <input
            type="text"
            placeholder="MM/YY"
            className="w-20 px-2 py-2 border border-gray-300 rounded-lg outline-none"
          />
          <input
            type="text"
            placeholder="CVC"
            className="w-15 px-2 py-2 border border-gray-300 rounded-lg outline-none"
          />
        </div>
      </div>

      {/* Country */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Country or region</label>
        <input
          type="text"
          placeholder="Pakistan"
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline-none"
        />
      </div>

      {/* Button */}
      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
        Pay Now
      </button>
    </div>  
      </div>

      <div className="div-3">
        <div className="pic1">
          <Image
          src="/graph.png"
          alt="This picture is anavailable"
          width={270}
          height={200}
          />
        </div>
        <div className="pic2">
          <Image
          src="/thankyou.png"
          alt="This picture is anavailable"
          width={200}
          height={200}
          />
        </div>
        <div className="macbook">
          <div className="mac-1">
        <Image
        src="/invoice.png"
        alt="This Picture Is anavailable"
        width={25}
        height={25}
        />
        </div>
        <div>

        <p>Macbook Pro 14-inch</p>
        <p><span>Gray</span></p>
        <p>$31,850.00 </p>
        </div>
        </div>
      </div>
     </div>
     </div>
) 
}




