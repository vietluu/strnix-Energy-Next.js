"use client"
import React from "react";
import Slider,{Settings} from 'react-slick'




const Homepage = () => {
    const setting: Settings = {
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: 'owl-dots',
        customPaging: (index) => {
            return (
                
                 <span></span>   
            
         )   
        },
  }
    return (
 <>
          <div className="slidemain ">    
            <Slider {...setting}>
                <div className="header-slides ">
                    <div className="img-slide slide" style={{backgroundImage:'url(https://smartdemowp.com/strnix/wp-content/uploads/2020/06/1-1.jpg)'}}>
                    </div>
                    <div className="image-layer ">
                        <div className="text-img ">
                            <span> <i className="fas fa-solar-panel "></i> W E L C O M E T O S T R N I X <i className="fas fa-solar-panel "></i></span>
                        </div>
                        <div className="text-info ">
                            <h1>Take Your Building Or Home Off The Grid By Solar</h1>
                        </div>

                    </div>
                </div>
                <div className="header-slides ">
                    <div className="img-slide slide" style={{backgroundImage:'url(https://smartdemowp.com/strnix/wp-content/uploads/2020/06/1-1.jpg)'}}>
                    </div>
                    <div className="image-layer ">
                        <div className="text-img ">
                            <span> <i className="fas fa-solar-panel "></i> W E L C O M E T O S T R N I X <i className="fas fa-solar-panel "></i></span>
                        </div>
                        <div className="text-info ">
                            <h1>Take Your Building Or Home Off The Grid By Solar</h1>
                        </div>

                    </div>
                </div>
                <div className="header-slides ">
                    <div className="img-slide slide" style={{backgroundImage:'url(https://smartdemowp.com/strnix/wp-content/uploads/2020/06/1-1.jpg)'}}>
                    </div>
                    <div className="image-layer ">
                        <div className="text-img ">
                            <span> <i className="fas fa-solar-panel "></i> W E L C O M E T O S T R N I X <i className="fas fa-solar-panel "></i></span>
                        </div>
                        <div className="text-info ">
                            <h1>Take Your Building Or Home Off The Grid By Solar</h1>
                        </div>

                    </div>
                </div>
            </Slider>



        </div>
        <div className="first-body">
            <div className="first-body-elm clearfix ">


                <div className="elm-left col-lg-6 col-md-12 col-sm-12 ">
                    <div className="imgelm ">
                        <div className="img-left ">
                            <img src="https://smartdemowp.com/strnix/wp-content/uploads/2020/06/featured-image-1.jpg " alt=" "/>

                        </div>
                    </div>
                    <div className="img-bottom ">
                        <img src="https://smartdemowp.com/strnix/wp-content/uploads/2020/06/featured-image-2.jpg " alt=" "/>

                    </div>
                </div>
                <div className="elm-right col-lg-6 col-md-12 col-sm-12 ">
                    <div className="elmif ">
                        <div className="title-text ">
                            <p>WHO ARE STRNIX <i className="fas fa-bolt "></i></p>
                        </div>
                        <h2>Integrated Solar Solutions</h2>
                        <div className="subtext ">
                            <p>For Controling Your Energy Production</p>
                        </div>
                        <div className="bottomtitle clearfix ">
                            <span className="line "></span>
                            <span className="dottitle "></span>
                            <span className="dottitle "></span>
                            <span className="dottitle "></span>
                        </div>
                    </div>
                    <div className="elmtextinfo ">
                        <p>Nunc quam arcu, pretium quis quam sed, laoreet efficitur leo. Aliquam era volutpat. Integer lobortis sem consequat consequat imperdiet. In nulla sed viverra ut lorem ut, dapibus consectetur diam. Nunc bibendum imperdiet condimentum.
                            Duis lacinia pulvinar turpis lacinia feugiat.</p>
                        <div className="texteffect ">
                            <p>Vivamus tellus enim, euismod euismod laoreet nec, aliquet ut metus. Cras feugiat turpis varius pellentesque eleifend. Vivamus porta ipsum diamy ac congue felis imperdiet vitae duis porttitor.</p>
                        </div>
                    </div>
                    <div className="iconenergy ">
                        <div className="icon ">
                            <div className="img-solar "> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwwLDApIj4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zNDQuODA4LDQyMi40MjljLTMuMzkyLTMuMzk0LTguODkyLTMuMzk0LTEyLjI4NS0wLjAwMWwtMjEuOTg2LDIxLjk4OGwtNi44NTEtMTguNjkyICAgIGMtMS4wMi0yLjc4NC0zLjM5LTQuODU1LTYuMjg2LTUuNDk0Yy0yLjg5Ni0wLjYzOS01LjkxNiwwLjI0NC04LjAxNCwyLjM0MWwtMjcuOTA1LDI3LjkwNWMtMy4zOTQsMy4zOTMtMy4zOTQsOC44OTMtMC4wMDEsMTIuMjg2ICAgIGMzLjM5MywzLjM5MSw4Ljg5MiwzLjM5MywxMi4yODYsMGwxOC4yODYtMTguMjg2bDYuODUxLDE4LjY5M2MxLjAyLDIuNzg0LDMuMzksNC44NTUsNi4yODYsNS40OTQgICAgYzAuNjIyLDAuMTM3LDEuMjQ5LDAuMjA0LDEuODcxLDAuMjA0YzIuMjc4LDAsNC40OTYtMC44OTgsNi4xNDMtMi41NDVsMzEuNjA1LTMxLjYwNiAgICBDMzQ4LjIsNDMxLjMyMiwzNDguMiw0MjUuODIyLDM0NC44MDgsNDIyLjQyOXoiIGZpbGw9IiMxM2I2ZDEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTE2My41NCwxMDhjLTU0LjQwOCwwLTk4LjY3Myw0NC4yNjUtOTguNjczLDk4LjY3MnM0NC4yNjUsOTguNjczLDk4LjY3Myw5OC42NzNzOTguNjcxLTQ0LjI2NCw5OC42NzEtOTguNjczICAgIEMyNjIuMjEyLDE1Mi4yNjUsMjE3Ljk0OCwxMDgsMTYzLjU0LDEwOHogTTE2My41MzksMjg3Ljk3MWMtNDQuODI5LDAtODEuMjk5LTM2LjQ3LTgxLjI5OS04MS4yOTkgICAgYzAtNDQuODI4LDM2LjQ3LTgxLjI5OSw4MS4yOTktODEuMjk5YzQ0LjgyOCwwLDgxLjI5OCwzNi40NzEsODEuMjk4LDgxLjI5OUMyNDQuODM3LDI1MS41LDIwOC4zNjcsMjg3Ljk3MSwxNjMuNTM5LDI4Ny45NzF6IiBmaWxsPSIjMTNiNmQxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0xNjMuNTM5LDQzLjEzM2MtNC43OTksMC04LjY4NywzLjg4OS04LjY4Nyw4LjY4N3YzNC4yMDRjMCw0Ljc5OSwzLjg4OSw4LjY4OCw4LjY4Nyw4LjY4OCAgICBjNC43OTksMCw4LjY4Ny0zLjg4OSw4LjY4Ny04LjY4N1Y1MS44MkMxNzIuMjI2LDQ3LjAyMywxNjguMzM4LDQzLjEzMywxNjMuNTM5LDQzLjEzM3oiIGZpbGw9IiMxM2I2ZDEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTIzNy41NjgsNDM2LjcxN2gtMTkuNDljLTI1LjI4MiwwLTQ1Ljg1Mi0yMC41NjktNDUuODUyLTQ1Ljg1MlYzMjcuMzJjMC00Ljc5Ny0zLjg4OC04LjY4Ny04LjY4Ny04LjY4NyAgICBzLTguNjg3LDMuODg5LTguNjg3LDguNjg3djYzLjU0NWMwLDM0Ljg2MiwyOC4zNjIsNjMuMjI1LDYzLjIyNSw2My4yMjVoMTkuNDljNC43OTksMCw4LjY4Ny0zLjg4OSw4LjY4Ny04LjY4NyAgICBTMjQyLjM2Niw0MzYuNzE3LDIzNy41NjgsNDM2LjcxN3oiIGZpbGw9IiMxM2I2ZDEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI3OS4xOCw5MS4wMzNjLTMuMzk0LTMuMzkzLTguODkzLTMuMzkzLTEyLjI4NiwwbC0yNC4xODcsMjQuMTg3Yy0zLjM5MywzLjM5My0zLjM5Myw4Ljg5MiwwLDEyLjI4NCAgICBjMS42OTYsMS42OTcsMy45MTksMi41NDUsNi4xNDIsMi41NDVjMi4yMjMsMCw0LjQ0Ny0wLjg0OCw2LjE0My0yLjU0NWwyNC4xODctMjQuMTg3ICAgIEMyODIuNTczLDk5LjkyNSwyODIuNTczLDk0LjQyNSwyNzkuMTgsOTEuMDMzeiIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNODQuMzczLDI4NS44NGMtMy4zOTMtMy4zOTEtOC44OTMtMy4zOTMtMTIuMjg2LDBsLTI0LjE4OCwyNC4xODdjLTMuMzk0LDMuMzkzLTMuMzk0LDguODkzLTAuMDAxLDEyLjI4NiAgICBjMS42OTcsMS42OTcsMy45MTksMi41NDUsNi4xNDMsMi41NDVjMi4yMjMsMCw0LjQ0Ny0wLjg0OCw2LjE0Mi0yLjU0NWwyNC4xODgtMjQuMTg3ICAgIEM4Ny43NjUsMjk0LjczMyw4Ny43NjUsMjg5LjIzMyw4NC4zNzMsMjg1Ljg0eiIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzE4LjM5MiwxOTcuOTg2aC0zNC4yMDZjLTQuNzk3LDAtOC42ODcsMy44ODktOC42ODcsOC42ODdjMCw0Ljc5NywzLjg4OCw4LjY4Nyw4LjY4Nyw4LjY4N2gzNC4yMDYgICAgYzQuNzk5LDAsOC42ODctMy44ODksOC42ODctOC42ODdDMzI3LjA3OCwyMDEuODc1LDMyMy4xOSwxOTcuOTg2LDMxOC4zOTIsMTk3Ljk4NnoiIGZpbGw9IiMxM2I2ZDEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQyLjg5MiwxOTcuOTg2SDguNjg3Yy00Ljc5OSwwLTguNjg3LDMuODg5LTguNjg3LDguNjg3YzAsNC43OTcsMy44ODgsOC42ODcsOC42ODcsOC42ODdoMzQuMjA1ICAgIGM0Ljc5OSwwLDguNjg3LTMuODg5LDguNjg3LTguNjg3QzUxLjU3OSwyMDEuODc1LDQ3LjY5MSwxOTcuOTg2LDQyLjg5MiwxOTcuOTg2eiIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNODQuMzcyLDExNS4yMTlMNjAuMTg0LDkxLjAzM2MtMy4zOTEtMy4zOTMtOC44OTItMy4zOTEtMTIuMjg0LDBjLTMuMzkzLDMuMzkzLTMuMzkzLDguODkzLDAuMDAxLDEyLjI4NmwyNC4xODcsMjQuMTg3ICAgIGMxLjY5NiwxLjY5NiwzLjkxOSwyLjU0NSw2LjE0MiwyLjU0NWMyLjIyMywwLDQuNDQ2LTAuODQ4LDYuMTQzLTIuNTQ1Qzg3Ljc2NSwxMjQuMTEyLDg3Ljc2NSwxMTguNjEyLDg0LjM3MiwxMTUuMjE5eiIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjc5LjE4LDMxMC4wMjhsLTI0LjE4Ny0yNC4xODdjLTMuMzkzLTMuMzkzLTguODkyLTMuMzk0LTEyLjI4NywwYy0zLjM5MywzLjM5My0zLjM5Myw4Ljg5MiwwLDEyLjI4NGwyNC4xODcsMjQuMTg3ICAgIGMxLjY5NywxLjY5NywzLjkxOSwyLjU0NSw2LjE0MywyLjU0NWMyLjIyMywwLDQuNDQ3LTAuODQ4LDYuMTQzLTIuNTQ1QzI4Mi41NzMsMzE4LjkyLDI4Mi41NzMsMzEzLjQyLDI3OS4xOCwzMTAuMDI4eiIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTAzLjMxMywxOTcuOTg2aC0xNy43NTZoLTguMDgzVjE0OS40N2MwLTQuNzk3LTMuODg4LTguNjg3LTguNjg3LTguNjg3cy04LjY4NywzLjg4OS04LjY4Nyw4LjY4N3Y0OC41MTZoLTQzLjc4NVYxNDkuNDcgICAgYzAtNC43OTctMy44ODgtOC42ODctOC42ODctOC42ODdzLTguNjg3LDMuODg5LTguNjg3LDguNjg3djQ4LjUxNmgtOC4wODNoLTE3Ljc1NmMtNC43OTksMC04LjY4NywzLjg4OS04LjY4Nyw4LjY4NyAgICBjMCw0Ljc5NywzLjg4OCw4LjY4Nyw4LjY4Nyw4LjY4N2g5LjA2OXY0Mi45MDljMCwyNy45NDQsMjAuNTYxLDUxLjE3Myw0Ny4zNDksNTUuMzZ2NzcuMjM4YzAsMjUuMjgyLTIwLjU2OSw0NS44NTItNDUuODUyLDQ1Ljg1MiAgICBoLTIwLjQzN2MtNC43OTksMC04LjY4NywzLjg4OS04LjY4Nyw4LjY4N3MzLjg4OCw4LjY4Nyw4LjY4Nyw4LjY4N2gyMC40MzdjMzQuODYzLDAsNjMuMjI1LTI4LjM2Myw2My4yMjUtNjMuMjI1di03Ny4yMzggICAgYzI2Ljc4Ny00LjE4Nyw0Ny4zNDktMjcuNDE2LDQ3LjM0OS01NS4zNnYtNDIuOTA5aDkuMDY5YzQuNzk5LDAsOC42ODctMy44ODksOC42ODctOC42ODcgICAgQzUxMS45OTksMjAxLjg3NSw1MDguMTExLDE5Ny45ODYsNTAzLjMxMywxOTcuOTg2eiBNNDc2Ljg3LDI1OC4yNjhjMCwyMS4zMTktMTcuMzQ1LDM4LjY2Mi0zOC42NjIsMzguNjYyICAgIHMtMzguNjYyLTE3LjM0NC0zOC42NjItMzguNjYydi00Mi45MDloNzcuMzI1VjI1OC4yNjh6IiBmaWxsPSIjMTNiNmQxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxjaXJjbGUgY3g9IjQyMS43MDciIGN5PSIyNTEuNjk4IiByPSI4LjY4NyIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxjaXJjbGUgY3g9IjQ1NC43MTgiIGN5PSIyNTEuNjk4IiByPSI4LjY4NyIgZmlsbD0iIzEzYjZkMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
                                />
                                <p><strong>SAVE ENERGY FOR WORLD</strong> </p>
                            </div>

                            <div className=" img-solar ">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTggNTExLjk5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU1Ljk5OCw0MC4zMmMtMjAuODMzLDAtMzcuNzgxLDE2Ljk0OC0zNy43ODEsMzcuNzgxczE2Ljk0OCwzNy43OCwzNy43ODEsMzcuNzhzMzcuNzgxLTE2Ljk0OSwzNy43ODEtMzcuNzggICAgQzI5My43OCw1Ny4yNjgsMjc2LjgzMSw0MC4zMiwyNTUuOTk4LDQwLjMyeiBNMjU1Ljk5OCwxMDAuODAyYy0xMi41MTgsMC0yMi43MDMtMTAuMTg0LTIyLjcwMy0yMi43MDIgICAgczEwLjE4NC0yMi43MDMsMjIuNzAzLTIyLjcwM3MyMi43MDMsMTAuMTg0LDIyLjcwMywyMi43MDNTMjY4LjUxNywxMDAuODAyLDI1NS45OTgsMTAwLjgwMnoiIGZpbGw9IiMyNmJkMTkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NS45OTgsMGMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOXYxMC4wOGMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5czcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5VjcuNTM5ICAgIEMyNjMuNTM4LDMuMzc2LDI2MC4xNjMsMCwyNTUuOTk4LDB6IiBmaWxsPSIjMjZiZDE5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMTguNTYzLDMwLjAwMmwtNy4xMjgtNy4xMjdjLTIuOTQzLTIuOTQ0LTcuNzE3LTIuOTQzLTEwLjY2MiwwYy0yLjk0NCwyLjk0NC0yLjk0NCw3LjcxOCwwLjAwMSwxMC42NjNsNy4xMjcsNy4xMjggICAgYzEuNDcyLDEuNDcyLDMuNDAyLDIuMjA4LDUuMzMxLDIuMjA4czMuODU5LTAuNzM2LDUuMzMyLTIuMjA5QzIyMS41MDgsMzcuNzIsMjIxLjUwOCwzMi45NDYsMjE4LjU2MywzMC4wMDJ6IiBmaWxsPSIjMjZiZDE5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0xOTUuNTE4LDcwLjU2aC0xMC4wOGMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOWMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5aDEwLjA4ICAgIGM0LjE2NSwwLDcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5QzIwMy4wNTcsNzMuOTM2LDE5OS42ODIsNzAuNTYsMTk1LjUxOCw3MC41NnoiIGZpbGw9IiMyNmJkMTkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTIxOC41NjMsMTE1LjUzNmMtMi45NDUtMi45NDQtNy43MTgtMi45NDQtMTAuNjY0LDBsLTcuMTI3LDcuMTI3Yy0yLjk0NCwyLjk0NC0yLjk0NCw3LjcxOCwwLDEwLjY2MiAgICBjMS40NzMsMS40NzIsMy40MDMsMi4yMDksNS4zMzIsMi4yMDlzMy44NTktMC43MzYsNS4zMzItMi4yMDlsNy4xMjctNy4xMjdDMjIxLjUwNywxMjMuMjU0LDIyMS41MDcsMTE4LjQ4LDIxOC41NjMsMTE1LjUzNnoiIGZpbGw9IiMyNmJkMTkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NS45OTgsMTMxLjA0MmMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOXYxMC4wOGMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5czcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5ICAgIHYtMTAuMDhDMjYzLjUzOCwxMzQuNDE4LDI2MC4xNjMsMTMxLjA0MiwyNTUuOTk4LDEzMS4wNDJ6IiBmaWxsPSIjMjZiZDE5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTEuMjI1LDEyMi42NjVsLTcuMTI3LTcuMTI3Yy0yLjk0NC0yLjk0NC03LjcxOC0yLjk0NS0xMC42NjMtMC4wMDFjLTIuOTQ1LDIuOTQ0LTIuOTQ1LDcuNzE4LTAuMDAxLDEwLjY2M2w3LjEyNyw3LjEyNyAgICBjMS40NzMsMS40NzIsMy40MDIsMi4yMDgsNS4zMzIsMi4yMDhjMS45MjksMCwzLjg1OS0wLjczNiw1LjMzMS0yLjIwOEMzMTQuMTY5LDEzMC4zODMsMzE0LjE2OSwxMjUuNjA5LDMxMS4yMjUsMTIyLjY2NXoiIGZpbGw9IiMyNmJkMTkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMyNi41Niw3MC41NjJoLTEwLjA4Yy00LjE2NSwwLTcuNTM5LDMuMzc2LTcuNTM5LDcuNTM5czMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5aDEwLjA4YzQuMTY1LDAsNy41MzktMy4zNzYsNy41MzktNy41MzkgICAgUzMzMC43MjUsNzAuNTYyLDMyNi41Niw3MC41NjJ6IiBmaWxsPSIjMjZiZDE5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTEuMjI0LDIyLjg3NGMtMi45NDMtMi45NDQtNy43MTctMi45NDMtMTAuNjYyLDBsLTcuMTI3LDcuMTI3Yy0yLjk0NCwyLjk0NC0yLjk0NCw3LjcxOCwwLjAwMSwxMC42NjMgICAgYzEuNDcxLDEuNDczLDMuNDAxLDIuMjA5LDUuMzMsMi4yMDljMS45MjksMCwzLjg1OS0wLjczNiw1LjMzMi0yLjIwOWw3LjEyNy03LjEyN0MzMTQuMTY5LDMwLjU5MywzMTQuMTY5LDI1LjgxOSwzMTEuMjI0LDIyLjg3NHogICAgIiBmaWxsPSIjMjZiZDE5IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik00NjUuMTIzLDM4Ni4xODFjLTAuMDA2LTAuMTMyLTAuMDA3LTAuMjYzLTAuMDItMC4zOTVjLTAuMDI2LTAuMjY1LTAuMDY2LTAuNTI2LTAuMTItMC43ODIgICAgYy0wLjAwMS0wLjAwNi0wLjAwMS0wLjAxMS0wLjAwMy0wLjAxN2wtMTMuNDI3LTYzLjc3OGMtMC4wMDUtMC4wMjMtMC4wMS0wLjA0NS0wLjAxNC0wLjA2OGwtMTMuNDI2LTYzLjc3NCAgICBjLTAuMDA1LTAuMDIzLTAuMDEtMC4wNDUtMC4wMTQtMC4wNjhsLTEzLjQzOS02My44MzdjLTAuNzM0LTMuNDg5LTMuODEyLTUuOTg2LTcuMzc4LTUuOTg2SDk0LjcxMyAgICBjLTMuNTY2LDAtNi42NDMsMi40OTctNy4zNzgsNS45ODZsLTEzLjQzNiw2My44M2MtMC4wMDYsMC4wMjctMC4wMTIsMC4wNTMtMC4wMTcsMC4wOGwtMTMuNDI1LDYzLjc3NSAgICBjLTAuMDA0LDAuMDE4LTAuMDA4LDAuMDM3LTAuMDExLDAuMDU1TDQ3LjAyLDM4NC45ODFjLTAuMDU2LDAuMjY5LTAuMDk5LDAuNTQ0LTAuMTI2LDAuODIyYy0wLjAwNiwwLjA2NC0wLjAwNSwwLjEzLTAuMDEsMC4xOTQgICAgYy0wLjAxMywwLjE3OS0wLjAyNywwLjM1OC0wLjAyNywwLjU0MXYzMC4yNDNjMCw0LjE2NCwzLjM3NSw3LjUzOSw3LjUzOSw3LjUzOWgxNzguOTR2NDIuMzU2aC01Ny45ODIgICAgYy00LjE2NSwwLTcuNTM5LDMuMzc2LTcuNTM5LDcuNTM5djIyLjcwNEg5NC43MTRjLTQuMTY1LDAtNy41MzksMy4zNzYtNy41MzksNy41MzlzMy4zNzUsNy41MzksNy41MzksNy41MzloODAuNjQxaDE2MS4yODVoODAuNjMgICAgYzQuMTY1LDAsNy41MzktMy4zNzYsNy41MzktNy41MzlzLTMuMzc1LTcuNTM5LTcuNTM5LTcuNTM5SDM0NC4xOHYtMjIuNzA0YzAtNC4xNjQtMy4zNzUtNy41MzktNy41MzktNy41MzloLTU3Ljk4MlY0MjQuMzJINDU3LjYgICAgYzQuMTY1LDAsNy41MzktMy4zNzYsNy41MzktNy41Mzl2LTMwLjEwOGMwLjAwMS0wLjAxLDAuMDAxLTAuMDIyLDAuMDAxLTAuMDM0di0wLjA5OCAgICBDNDY1LjE0MSwzODYuNDE4LDQ2NS4xMjksMzg2LjMwMSw0NjUuMTIzLDM4Ni4xODF6IE00NDguMzExLDM3OUgzMzAuMjNsLTMuNDIzLTQ4Ljc2M2gxMTEuMjM4TDQ0OC4zMTEsMzc5eiBNNDI0LjYwNSwyNjYuMzk2ICAgIGwxMC4yNjcsNDguNzYzSDMyNS43NDlsLTMuNDIzLTQ4Ljc2M0g0MjQuNjA1eiBNNDExLjE2NSwyMDIuNTU1bDEwLjI2Nyw0OC43NjNIMzIxLjI2OGwtMy40MjMtNDguNzYzSDQxMS4xNjV6IE0yMDkuMjY1LDIwMi41NTUgICAgaDkzLjQ2NWwzLjQyMyw0OC43NjNoLTEwMC4zMUwyMDkuMjY1LDIwMi41NTV6IE0yMDQuNzg2LDI2Ni4zOTZoMTAyLjQyNWwzLjQyMyw0OC43NjNoLTEwOS4yN0wyMDQuNzg2LDI2Ni4zOTZ6IE0yMDAuMzA3LDMzMC4yMzggICAgaDExMS4zODVMMzE1LjExNCwzNzlIMTk2Ljg4NUwyMDAuMzA3LDMzMC4yMzh6IE0xMDAuODMxLDIwMi41NTVoOTMuMzE5bC0zLjQyMiw0OC43NjNIOTAuNTY1TDEwMC44MzEsMjAyLjU1NXogTTg3LjM5MiwyNjYuMzk2ICAgIEgxODkuNjdsLTMuNDIyLDQ4Ljc2M0g3Ny4xMjZMODcuMzkyLDI2Ni4zOTZ6IE0zMjkuMTAyLDQ4MS43NTd2MTUuMTY0SDE4Mi44OTV2LTE1LjE2NGg1Ny45ODJoMzAuMjQ0SDMyOS4xMDJ6IE0yNDguNDE2LDQ2Ni42NzggICAgdi00Mi4zNTZoMTUuMTY1djQyLjM1NkgyNDguNDE2eiBNMjcxLjIwOCw0MDkuMjQzYy0wLjAyOSwwLTAuMDU4LTAuMDA0LTAuMDg3LTAuMDA0aC0zMC4yNDRjLTAuMDI5LDAtMC4wNTgsMC4wMDQtMC4wODcsMC4wMDQgICAgSDYxLjkzNXYtMTUuMTY0aDM1LjkxNWM0LjE2NSwwLDcuNTM5LTMuMzc2LDcuNTM5LTcuNTM5YzAtNC4xNjQtMy4zNzUtNy41MzktNy41MzktNy41MzlINjMuNjg3bDEwLjI2NS00OC43NjNIMTg1LjE5ICAgIEwxODEuNzY4LDM3OWgtNTEuMzE0aC0wLjAwMWMtNC4xNjUsMC03LjUzOSwzLjM3Ni03LjUzOSw3LjUzOWMwLDQuMTY0LDMuMzc1LDcuNTM5LDcuNTM5LDcuNTM5aDAuMDAxaDU4LjMzNyAgICBjMC4wMDUsMCwwLjAwOSwwLDAuMDE0LDBjMC4wMDMsMCwwLjAwNywwLDAuMDEsMGgxMzQuMzY3YzAuMDAzLDAsMC4wMDcsMCwwLjAxLDBjMC4wMDUsMCwwLjAwOSwwLDAuMDE0LDBINDUwLjA2djE1LjE2NEgyNzEuMjA4eiAgICAiIGZpbGw9IiMyNmJkMTkiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+ "
                                />
                                <p><strong> RESIDENTIALS SOLUTIONS</strong></p>
                            </div>
                            <div className="img-solar ">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ0OCA0NDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Ik00NDgsMjQ5YzAtNTcuMzQ2LTQ2LjY1NC0xMDQtMTA0LTEwNGMtMjAuMzMsMC00MC4yMiw2LjAyMy01Ny4wODksMTcuMDk1Yy00LjM4LTE5LjE4Mi0xMC4yMDMtMzcuNjYyLTE3LjIzNS01NC4xOTggIEMyNTAuNzgxLDYzLjQ2OSwyMjYuMDM2LDM5LDIwMCwzOWMtMjYuMDY1LDAtNTAuODEsMjQuMzY4LTY5LjY3Myw2OC42MTVjLTYuNjQ1LDE1LjU4Ny0xMi4yMTIsMzIuOTQtMTYuNTAxLDUxLjAxbC0yNi4xMDgtOTUuNzMgIEM4Ni43NjgsNTkuNDE1LDgzLjYwNyw1Nyw4MCw1N3MtNi43NjksMi40MTUtNy43MTgsNS44OTZsLTcyLDI2NGMtMC42NTYsMi40MDUtMC4xNTMsNC45NzksMS4zNiw2Ljk2ICBDMy4xNTYsMzM1LjgzOCw1LjUwNywzMzcsOCwzMzdoNjR2NjRjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOHYtNjRoNjRjMi40OTMsMCw0Ljg0NC0xLjE2Miw2LjM1Ny0zLjE0NSAgYzEuMjMyLTEuNjEzLDEuNzgxLTMuNjE4LDEuNTk0LTUuNjA2YzkuODk4LDQuNTU1LDIwLjY5Niw3LjQ3NSwzMi4wNDksOC40MTVWNDAxYzAsNC40MTgsMy41ODIsOCw4LDhzOC0zLjU4Miw4LTh2LTY0LjMzNSAgYzIwLjc2OC0xLjcxOSwzOS42ODQtMTAuMDY3LDU0LjYyLTIyLjkyYzE4LjAxNCwyMi42MjYsNDQuNTg0LDM2LjcyLDczLjM4LDM4LjkzNlY0MDFjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOHYtNDguMzA1ICBDNDA1LjYyMiwzNDguNTk3LDQ0OCwzMDMuNjU0LDQ0OCwyNDl6IE0xNDEuNTI2LDMyMUg4OHYtMTIuNjg2bDE0LjE1Ny0xNC4xNTdjMy4xMjQtMy4xMjUsMy4xMjQtOC4xODksMC0xMS4zMTQgIGMtMy4xMjUtMy4xMjMtOC4xODktMy4xMjMtMTEuMzE0LDBMODgsMjg1LjY4NVYyMzNjMC00LjQxOC0zLjU4Mi04LTgtOHMtOCwzLjU4Mi04LDh2MzYuNjg2bC0xMC4zNDMtMTAuMzQzICBjLTMuMTI1LTMuMTIzLTguMTg5LTMuMTIzLTExLjMxNCwwYy0zLjEyNCwzLjEyNS0zLjEyNCw4LjE4OSwwLDExLjMxNEw3MiwyOTIuMzE0djEyLjY4YzAsMC4wMDMsMCwwLjAwNywwLDAuMDFWMzIxSDE4LjQ3NCAgTDgwLDk1LjQwNGwyNy4xMDUsOTkuMzgzYy0yLjEwOSwxNS41NDMtMy4yMywzMS4xMS0zLjIzLDQ2LjA4N2MwLDMwLjQwOCwxNC4xOTYsNTcuNTU5LDM2LjMwNCw3NS4xODZMMTQxLjUyNiwzMjF6IE0yMDgsMzA4LjMxNCAgbDI5LjY1Ny0yOS42NTdjMy4xMjQtMy4xMjUsMy4xMjQtOC4xODksMC0xMS4zMTRjLTMuMTI1LTMuMTIzLTguMTg5LTMuMTIzLTExLjMxNCwwTDIwOCwyODUuNjg1di0zMy4zNzFsMjEuNjU3LTIxLjY1NyAgYzMuMTI0LTMuMTI1LDMuMTI0LTguMTg5LDAtMTEuMzE0Yy0zLjEyNS0zLjEyMy04LjE4OS0zLjEyMy0xMS4zMTQsMEwyMDgsMjI5LjY4NVYyMDljMC00LjQxOC0zLjU4Mi04LTgtOHMtOCwzLjU4Mi04LDh2MzkuOTk1ICBjMCwwLjAwMywwLDAuMDA3LDAsMC4wMXYyMC42OGwtMTguMzQzLTE4LjM0M2MtMy4xMjUtMy4xMjMtOC4xODktMy4xMjMtMTEuMzE0LDBjLTMuMTI0LDMuMTI1LTMuMTI0LDguMTg5LDAsMTEuMzE0TDE5MiwyOTIuMzE0ICB2MTIuNjhjMCwwLjAwMywwLDAuMDA3LDAsMC4wMXYxNS41OTRjLTQwLjQzOC00LjAyOC03Mi4xMjUtMzguMjQ0LTcyLjEyNS03OS43MjRjMC00Mi41NDQsOS40MDktOTAuMDE2LDI1LjE3LTEyNi45ODQgIEMxNjEuMDAxLDc2LjQ2NSwxODEuMDMxLDU1LDIwMCw1NWMxOC45MzQsMCwzOC45NjMsMjEuNTYzLDU0Ljk1Miw1OS4xNTljMTUuNzYzLDM3LjA2NCwyNS4xNzMsODQuNDM1LDI1LjE3MywxMjYuNzE2ICBjMCw0MS40ODEtMzEuNjg3LDc1LjY5Ny03Mi4xMjUsNzkuNzI0VjMwOC4zMTR6IE0zNTIsMzM2LjYzM3YtMTIuMzE4bDI5LjY1Ny0yOS42NTdjMy4xMjQtMy4xMjUsMy4xMjQtOC4xODksMC0xMS4zMTQgIGMtMy4xMjUtMy4xMjMtOC4xODktMy4xMjMtMTEuMzE0LDBMMzUyLDMwMS42ODVWMjQ5YzAtNC40MTgtMy41ODItOC04LThzLTgsMy41ODItOCw4djM2LjY4NmwtMTguMzQzLTE4LjM0MyAgYy0zLjEyNS0zLjEyMy04LjE4OS0zLjEyMy0xMS4zMTQsMGMtMy4xMjQsMy4xMjUtMy4xMjQsOC4xODksMCwxMS4zMTRMMzM2LDMwOC4zMTR2MTIuNjhjMCwwLjAwMywwLDAuMDA3LDAsMC4wMXYxNS42MyAgYy0yNC41MzgtMi4yMzQtNDcuMDY0LTE0LjY3Ny02Mi4wNjYtMzQuMzk4YzEzLjg1LTE2LjY1OSwyMi4xOTEtMzguMDU0LDIyLjE5MS02MS4zNjJjMC0xOS45NTItMi4wMS00MC45OTQtNS43MjMtNjEuNjU2ICBDMzA1LjcwNywxNjcuNDU4LDMyNC42MTgsMTYxLDM0NCwxNjFjNDguNTIzLDAsODgsMzkuNDc3LDg4LDg4QzQzMiwyOTQuODI2LDM5Ni43ODgsMzMyLjU3NywzNTIsMzM2LjYzM3oiIGZpbGw9IiMwZjQ3ZjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
                                />
                                <p><strong>GET ENERGY FORESTS</strong></p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
 </>
    
  );
};

export default Homepage;
