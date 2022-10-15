// import Home from "../views/Home"

const Hero = () => {
    return (
        <div className="py-24">
        <div className="container max-w-screen-xl">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5 mb-10 mb-lg-0">
             
              <div className="display-4 mb-5 mt-n16"></div>
            
              <h1 className="ls-tight font-bolder display-2 mb-5">
              Find A Job That
Matches Your Passion through Social-Engineer
              </h1>
              
              <p className="lead mb-10">
              Hand-picked opportunities to work from home, remotely, freelance, full-time, part-time, contract and internships.
              </p>
             
              <div className="mx-n2">
                <a href="/register" className="random">
                  Get started
                </a>
                
              </div>
            </div>
            <div className="col-12 col-lg-6 ms-lg-auto">
              <div className="w-xl-12/10 position-relative">
               
                <span className="d-none d-lg-block position-absolute top-0 start-0 transform translate-x-n32 translate-y-n16 w-2/3 h-2/3 bg-warning opacity-20 rounded-circle filter blur-50"></span>
                <span className="d-none d-xl-block position-absolute bottom-0 end-0 transform translate-x-16 translate-y-16 w-32 h-32 bg-warning opacity-60 rounded-circle filter blur-50"></span>
                
                <img alt="..." src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=900&q=80" class="imagers" />
                <div className="engineer">
                <h1 class="display-1">Most Popular Engineers </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Hero