'use client'
export const Footer = () => {
    const goToTop = ():void => {
        if (typeof window != 'undefined') {
            window.scrollTo(0,0)
        }
    }
    return (
        <footer>
            <div className="ten-body ">
                <div className="ten-container ">
                    <div className="row-list ">
                        <div className="info-link ">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQ4OS41IDI0M2MtOS43NzggMC0xOC4xMiA2LjI3LTIxLjIxNSAxNWgtNjIuMjg1Yy01My43NjIgMC05Ny41IDQzLjczOC05Ny41IDk3LjV2NzRjMCA5Ljc3OC02LjI3MSAxOC4xMTQtMTUgMjEuMjF2LTE1OC4yMDloNy41YzEyLjQwNyAwIDIyLjUtMTAuMDkzIDIyLjUtMjIuNSAwLTcuMzIxLTMuNTE2LTEzLjgzNS04Ljk0Ny0xNy45NDZsMjcuNjc3LTI3LjY3N2MxMi43NDktMTIuNzQ5IDE5Ljc3MS0yOS43IDE5Ljc3MS00Ny43M3YtNjQuMTQ4YzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjVoLTIyLjUwMXYtODIuNWMwLTEyLjQwNy0xMC4wOTMtMjIuNS0yMi41LTIyLjVzLTIyLjUgMTAuMDkzLTIyLjUgMjIuNXY4Mi41aC02MnYtODIuNWMwLTEyLjQwNy0xMC4wOTMtMjIuNS0yMi41LTIyLjVzLTIyLjUgMTAuMDkzLTIyLjUgMjIuNXY4Mi41aC0yMi41Yy00LjE0MiAwLTcuNSAzLjM1OC03LjUgNy41djY0LjE0OGMwIDE4LjAzIDcuMDIxIDM0Ljk4MSAxOS43NzEgNDcuNzNsMjcuNjc3IDI3LjY3N2MtNS40MzEgNC4xMTEtOC45NDcgMTAuNjI1LTguOTQ3IDE3Ljk0NiAwIDEyLjQwNyAxMC4wOTMgMjIuNSAyMi41IDIyLjVoNy41djEzNi45OTljMCA0LjE0MiAzLjM1OCA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXYtMTM2Ljk5OWg0NXYyMDQuNDk5aC00NXYtMzcuNWMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41LTEyLjQwNyAwLTIyLjUtMTAuMDkzLTIyLjUtMjIuNXYtNzRjMC01My43NjItNDMuNzM4LTk3LjUtOTcuNS05Ny41aC02Mi4yODZjLTMuMDk1LTguNzMtMTEuNDM3LTE1LTIxLjIxNS0xNS0xMi40MDcgMC0yMi41IDEwLjA5My0yMi41IDIyLjUgMCA1My43NjIgNDMuNzM4IDk3LjUgOTcuNSA5Ny41aDY4LjVjMTIuNDA3IDAgMjIuNSAxMC4wOTMgMjIuNSAyMi41djQ0YzAgMTguMTA5IDEyLjkwNSAzMy4yNjIgMzAgMzYuNzQ3djM4LjI1M2MwIDQuMTQyIDMuMzU4IDcuNSA3LjUgNy41aDYwYzQuMTQyIDAgNy41LTMuMzU4IDcuNS03LjV2LTM4LjI1NWMxNy4wOTYtMy40ODQgMzAtMTguNjM1IDMwLTM2Ljc0NXYtNDRjMC0xMi40MDcgMTAuMDkzLTIyLjUgMjIuNS0yMi41aDY4LjVjNTMuNzYyIDAgOTcuNS00My43MzggOTcuNS05Ny41IDAtMTIuNDA3LTEwLjA5My0yMi41LTIyLjUtMjIuNXptLTE4MC0yMjhjNC4xMzYgMCA3LjUgMy4zNjQgNy41IDcuNXY1Mi41aC0xNXYtNTIuNWMwLTQuMTM2IDMuMzY0LTcuNSA3LjUtNy41em0tNy41IDc1aDE1djE1aC0xNXptLTk5LjUtNzVjNC4xMzYgMCA3LjUgMy4zNjQgNy41IDcuNXY1Mi41aC0xNXYtNTIuNWMwLTQuMTM2IDMuMzY0LTcuNSA3LjUtNy41em0tNy41IDc1aDE1djE1aC0xNXptLTMwIDg2LjY0OHYtNTYuNjQ4aDE4MnY1Ni42NDhjMCAxNC4wMjMtNS40NjEgMjcuMjA4LTE1LjM3NyAzNy4xMjRsLTMzLjcyOSAzMy43MjloLTgzLjc4N2wtMzMuNzI5LTMzLjcyOWMtOS45MTctOS45MTctMTUuMzc4LTIzLjEwMS0xNS4zNzgtMzcuMTI0em0zOC41IDkzLjM1M2MwLTQuMTM2IDMuMzY0LTcuNSA3LjUtNy41aDkwYzQuMTM2IDAgNy41IDMuMzY0IDcuNSA3LjVzLTMuMzY0IDcuNS03LjUgNy41aC05MGMtNC4xMzYgMC03LjUtMy4zNjQtNy41LTcuNXptLTE1IDg1LjUxN2MtNi4yNzEtNC43MTgtMTQuMDY1LTcuNTE4LTIyLjUtNy41MThoLTY4LjVjLTQ1LjQ5MSAwLTgyLjUtMzcuMDA5LTgyLjUtODIuNSAwLTQuMTM2IDMuMzY0LTcuNSA3LjUtNy41czcuNSAzLjM2NCA3LjUgNy41YzAgNC4xNDIgMy4zNTggNy41IDcuNSA3LjVoNjguNWM0NS40OTEgMCA4Mi41IDM3LjAwOSA4Mi41IDgyLjUxOHptMjI2LTcuNTE4aC02OC41Yy04LjQzNSAwLTE2LjIyOSAyLjgtMjIuNSA3LjUxOCAwLTQ1LjUwOSAzNy4wMDktODIuNTE4IDgyLjUtODIuNTE4aDY4LjVjNC4xNDIgMCA3LjUtMy4zNTggNy41LTcuNSAwLTQuMTM2IDMuMzY0LTcuNSA3LjUtNy41czcuNSAzLjM2NCA3LjUgNy41YzAgNDUuNDkxLTM3LjAwOSA4Mi41LTgyLjUgODIuNXoiIGZpbGw9IiMwOGUzMDYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                            />
                            <a href=" # ">ENERGY EFFICIENCY SOLUTIONS</a>
                        </div>
                        <div className="info-link ">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4MC4wMDkgNDgwLjAwOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMCwwLDEsNDgwLjAwOTE1NTI3MzQzNzUsMCkiPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ3OS45MTMsMzExLjUwOGMtMC4wNDYtMC43MDYtMC4xODYtMS40MDMtMC40MTYtMi4wNzJjLTAuMDg4LTAuMjU2LTAuMTUyLTAuNDk2LTAuMjY0LTAuNzQ0ICAgIGMtMC4zODktMC44Ny0wLjkzMS0xLjY2NC0xLjYtMi4zNDRsLTEyOC0xMjhjLTEuNDkyLTEuNDkzLTMuNTE0LTIuMzM1LTUuNjI0LTIuMzQ0aC0xNzIuNTZjMi45NzEtNi4yNTEsNC41MjgtMTMuMDc5LDQuNTYtMjAgICAgYy0wLjAzMS0yMy41MS0xNy4wNTktNDMuNTUtNDAuMjU2LTQ3LjM3NmMwLjE2OC0xLjUzNiwwLjI1My0zLjA3OSwwLjI1Ni00LjYyNGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4Yy0yNi41MSwwLTQ4LDIxLjQ5LTQ4LDQ4ICAgIGMwLjAwMywxLjU0NSwwLjA4OCwzLjA4OCwwLjI1Niw0LjYyNGMtMjYuMDUsNC4xNDMtNDMuODA4LDI4LjYyLTM5LjY2NSw1NC42NjljMS4wNjIsNi42NzgsMy41MywxMy4wNTQsNy4yNDEsMTguNzA3ICAgIGMtMTAuODcsMTYuNDk5LTEwLjM4OSwzOC4wMDQsMS4yMDgsNTRjLTEzLjI3NCwxOC4zMjYtMTEuNzk1LDQzLjQ2OCwzLjUzNiw2MC4xMTJMMi4zNTMsMzA2LjM0OCAgICBjLTEuNSwxLjUtMi4zNDQsMy41MzQtMi4zNDQsNS42NTZ2MTYwYzAsNC40MTgsMy41ODIsOCw4LDhoNDY0YzQuNDE4LDAsOC0zLjU4Miw4LTh2LTE2MCAgICBDNDgwLjAwOSwzMTEuODM2LDQ3OS45MjEsMzExLjY4NCw0NzkuOTEzLDMxMS41MDh6IE00NTIuNjczLDMwNC4wMDRoLTQ5LjJsLTMwLTMyaDQ3LjJMNDUyLjY3MywzMDQuMDA0eiBNMjcxLjk2OSwyMzIuMDA0aDQyLjA4ICAgIGwyMi40OTYsMjRoLTQyLjA3MkwyNzEuOTY5LDIzMi4wMDR6IE0yNzIuNTQ1LDI1Ni4wMDRoLTUzLjIyNGwtMjQtMjRoNTQuNzI4TDI3Mi41NDUsMjU2LjAwNHogTTM1MS41NDUsMjcyLjAwNGwzMCwzMmgtNDIuMDcyICAgIGwtMzAtMzJIMzUxLjU0NXogTTQwNC42OTcsMjU2LjAwNGgtNDYuMjI0bC0yMi40NjQtMjRoNDQuNzI4TDQwNC42OTcsMjU2LjAwNHogTTM0MC42OTcsMTkyLjAwNGwyNCwyNGgtNDMuNzI4bC0yMi40OTYtMjQgICAgSDM0MC42OTd6IE0yNzYuNTQ1LDE5Mi4wMDRsMjIuNTA0LDI0aC00Mi4wOGwtMjIuNDk2LTI0SDI3Ni41NDV6IE0yMTIuNTQ1LDE5Mi4wMDRsMjIuNTA0LDI0aC01NS43MjhsLTI0LTI0SDIxMi41NDV6ICAgICBNMjMuODk3LDE3Ni44MDRjLTUuMDU5LTUuNzUxLTcuODYyLTEzLjE0MS03Ljg4OC0yMC44YzAtMTcuNjczLDE0LjMyNy0zMiwzMi0zMmgwLjA4YzAuNTIsMC4wNzIsMS4wNDgsMC4xMzYsMS42LDAuMTYgICAgYzQuNDEyLDAuMjMyLDguMTc3LTMuMTU3LDguNDA5LTcuNTY5YzAuMDUtMC45NTgtMC4wNzItMS45MTctMC4zNjEtMi44MzFjLTEuMDg0LTMuMTQzLTEuNjY3LTYuNDM2LTEuNzI4LTkuNzYgICAgYzAtMTcuNjczLDE0LjMyNy0zMiwzMi0zMnMzMiwxNC4zMjcsMzIsMzJjLTAuMDU2LDMuMzItMC42MzQsNi42MTEtMS43MTIsOS43NTJjLTEuMzMyLDQuMjEzLDEuMDA0LDguNzA3LDUuMjE3LDEwLjAzOSAgICBjMC45MTQsMC4yODksMS44NzMsMC40MTEsMi44MzEsMC4zNjFjMC41NTctMC4wMTUsMS4xMTMtMC4wNjYsMS42NjQtMC4xNTJjMTcuNjczLDAsMzIsMTQuMzI3LDMyLDMyICAgIGMtMC4wMTQsNy4yOTktMi41NTgsMTQuMzY3LTcuMiwyMGgtMTYuOGMtMC45MzMsMC4wMTYtMS44NTYsMC4xOTQtMi43MjgsMC41MjhjLTAuMDk2LDAuMDQtMC4yMDgsMC0wLjMxMiwwLjA4ICAgIGMtMC4xMDQsMC4wOC0wLjI4LDAuMi0wLjQ0LDAuMjhjLTAuNjQsMC4zMTQtMS4yMzQsMC43MTItMS43NjgsMS4xODRjLTAuMTIsMC4xMDQtMC4yODgsMC4xNTItMC40MDgsMC4yNzJsLTM0LjM0NCwzNC4zNDQgICAgdi04NC42ODhjMC00LjQxOC0zLjU4Mi04LTgtOHMtOCwzLjU4Mi04LDh2NDQuNjg4bC0xOC4zNDQtMTguMzQ0Yy0zLjE3OC0zLjA2OS04LjI0My0yLjk4MS0xMS4zMTIsMC4xOTcgICAgYy0yLjk5NCwzLjEtMi45OTQsOC4wMTUsMCwxMS4xMTVsMjkuNjU2LDI5LjY1NnYzMy4zNjhsLTgsOGwtMTAuMzQ0LTEwLjMzNmMtMy4xNzgtMy4wNjktOC4yNDMtMi45ODEtMTEuMzEyLDAuMTk3ICAgIGMtMi45OTQsMy4xLTIuOTk0LDguMDE1LDAsMTEuMTE1bDEwLjM0NCwxMC4zNDRsLTM2Ljg0LDM2LjhjLTUuMDU5LTUuNzQ4LTcuODQ5LTEzLjE0My03Ljg0OC0yMC44ICAgIGMtMC4wMDktOC4zODYsMy4yOTUtMTYuNDM3LDkuMTkyLTIyLjRjMy4wNDktMy4xMTEsMy4wNDktOC4wODksMC0xMS4yYy0xMS43NDYtMTEuODA5LTEyLjMxNi0zMC43MDQtMS4zMDQtNDMuMiAgICBDMjYuNDU3LDE4NC4yMTEsMjYuNDU3LDE3OS43OTgsMjMuODk3LDE3Ni44MDR6IE0xNjguMDA5LDQ2NC4wMDRoLTY0di05Nmg2NFY0NjQuMDA0eiBNMjU2LjAwOSw0NjQuMDA0aC03MnYtMTA0ICAgIGMwLTQuNDE4LTMuNTgyLTgtOC04aC04MGMtNC40MTgsMC04LDMuNTgyLTgsOHYxMDRoLTcyVjMxNS4zMTZsMTMuNzYtMTMuNzZsNjMuODg4LTYzLjg4OGw0Mi4zNTItNDIuMzUybDEyMCwxMjBWNDY0LjAwNHogICAgIE0yMzUuMzIxLDI3Mi4wMDRoNTIuMjI0bDMwLDMyaC01MC4yMjRMMjM1LjMyMSwyNzIuMDA0eiBNNDY0LjAwOSw0NjQuMDA0aC0xOTJ2LTE0NGgxOTJWNDY0LjAwNHoiIGZpbGw9IiMwOGUzMDYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM5Mi4wMDksMzIuMDA0Yy0zMC45MjgsMC01NiwyNS4wNzItNTYsNTZjMCwzMC45MjgsMjUuMDcyLDU2LDU2LDU2YzMwLjkxMS0wLjA0LDU1Ljk2LTI1LjA4OSw1Ni01NiAgICBDNDQ4LjAwOSw1Ny4wNzYsNDIyLjkzNywzMi4wMDQsMzkyLjAwOSwzMi4wMDR6IE0zOTIuMDA5LDEyOC4wMDRjLTIyLjA5MSwwLTQwLTE3LjkwOS00MC00MHMxNy45MDktNDAsNDAtNDAgICAgYzIyLjA5MSwwLDQwLDE3LjkwOSw0MCw0MEM0MzEuOTgyLDExMC4wODUsNDE0LjA4OSwxMjcuOTc4LDM5Mi4wMDksMTI4LjAwNHoiIGZpbGw9IiMwOGUzMDYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMzg0LjAwOSIgeT0iMC4wMDQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzA4ZTMwNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIzODQuMDA5IiB5PSIxNjAuMDA0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiMwOGUzMDYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMzA0LjAwOSIgeT0iODAuMDA0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiMwOGUzMDYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iNDY0LjAwOSIgeT0iODAuMDA0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiMwOGUzMDYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMzI3LjQ0MSIgeT0iMjMuNDM1IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIDc2LjAyMDEgMjQ2LjM5OTMpIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiMwOGUzMDYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iNDQwLjU2NSIgeT0iMTM2LjU3MSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAyOS4xNTUyIDM1OS41Mjg1KSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjMDhlMzA2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjMyNy40MzUiIHk9IjEzNi41NjUiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTMuOTc2MSAyNzkuNTMwNykiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzA4ZTMwNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI0NDAuNTcxIiB5PSIyMy40NDEiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgMTA5LjE1MTQgMzI2LjM5NjcpIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiMwOGUzMDYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+ "
                            />
                            <a href="# ">SOLAR PANEL COMMISSIONING</a>
                        </div>
                        <div className="social-logo ">
                            <a href="# "><img src="/assets/images/home/logo.svg " alt="Logo " />
                            </a>
                            <ul className="social-comunity ">
                                <li>
                                    <a href="# "><i className="fab fa-twitter "></i></a>
                                </li>
                                <li>
                                    <a href="# "><i className="fab fa-facebook-f "></i></a>
                                </li>
                                <li><a href="# "><i className="fab fa-instagram "></i></a>
                                </li>
                                <li>
                                    <a href="# "><i className="fab fa-linkedin-in "></i></a>
                                </li>
                                <li><a href="# "><i className="fab fa-pinterest-p "></i></a>
                                </li>
                            </ul>

                        </div>
                        <div className="info-link ">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTE5OS4yMjMgMzA1LjMwNmgzOC4wOTh2NjguMDkxYzAgNC41MTIgMy4wMjEgOC40NjUgNy4zNzYgOS42NDkuODcyLjIzNyAxLjc1My4zNTIgMi42MjUuMzUyIDMuNDggMCA2Ljc5NC0xLjgyNSA4LjYyMi00LjkzN2w2NS40NTYtMTExLjQ1N2MxLjgxNS0zLjA5MiAxLjgzNy02LjkxOS4wNTYtMTAuMDMyLTEuNzgxLTMuMTEyLTUuMDkzLTUuMDMyLTguNjc5LTUuMDMyaC0zOC4wOTd2LTY4LjA5YzAtNC41MTItMy4wMjEtOC40NjUtNy4zNzYtOS42NDktNC4zNTQtMS4xODUtOC45NjEuNjkzLTExLjI0NyA0LjU4NWwtNjUuNDU3IDExMS40NTZjLTEuODE1IDMuMDkyLTEuODM3IDYuOTE5LS4wNTYgMTAuMDMyIDEuNzgxIDMuMTEyIDUuMDkzIDUuMDMyIDguNjc5IDUuMDMyem01NS40NTctODQuNjgydjQxLjMxNmMwIDUuNTIzIDQuNDc3IDEwIDEwIDEwaDMwLjYyOGwtMzcuOTg3IDY0LjY4M3YtNDEuMzE3YzAtNS41MjMtNC40NzgtMTAtMTAtMTBoLTMwLjYyOHoiIGZpbGw9IiMwOGUzMDYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzc0LjY4NSAyODguNjI2aDEwLjU5MnYxMC41OTJjMCA1LjUyMyA0LjQ3OCAxMCAxMCAxMHMxMC00LjQ3NyAxMC0xMHYtMTAuNTkyaDEwLjU5M2M1LjUyMiAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3OC0xMC0xMC0xMGgtMTAuNTkzdi0xMC41OTNjMC01LjUyMy00LjQ3OC0xMC0xMC0xMHMtMTAgNC40NzctMTAgMTB2MTAuNTkzaC0xMC41OTJjLTUuNTIyIDAtMTAgNC40NzctMTAgMTBzNC40NzcgMTAgMTAgMTB6IiBmaWxsPSIjMDhlMzA2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTk2LjEzMSAyODguNjI0aDQxLjE4NWM1LjUyMyAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ny0xMC0xMC0xMGgtNDEuMTg1Yy01LjUyMiAwLTEwIDQuNDc3LTEwIDEwczQuNDc3IDEwIDEwIDEweiIgZmlsbD0iIzA4ZTMwNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im01MDIgMTUyLjk3NGM1LjUyMiAwIDEwLTQuNDc3IDEwLTEwdi01Mi4yNzhjMC01LjUyMy00LjQ3OC0xMC0xMC0xMGgtNDYuOTA5di0zNS4yNDdjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMGgtOTkuNjI5Yy01LjUyMiAwLTEwIDQuNDc3LTEwIDEwdjM1LjI0N2gtMzQuMjU2Yy01LjUyMiAwLTEwIDQuNDc3LTEwIDEwczQuNDc4IDEwIDEwIDEwaDE5MC43OTR2MzIuMjc4aC00NzJ2LTMyLjI3OGgxOTAuNzk0YzUuNTIzIDAgMTAtNC40NzcgMTAtMTBzLTQuNDc3LTEwLTEwLTEwaC0zNC4yNTZ2LTM1LjI0N2MwLTUuNTIzLTQuNDc4LTEwLTEwLTEwaC05OS42MjljLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2MzUuMjQ3aC00Ni45MDljLTUuNTIzIDAtMTAgNC40NzctMTAgMTB2NTIuMjc4YzAgNS41MjMgNC40NzcgMTAgMTAgMTBoMTkuNzQzdjI1MS4yOThoLTE5Ljc0M2MtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHY1Mi4yNzljMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMGg0OTJjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHYtNTIuMjc5YzAtNS41MjMtNC40NzgtMTAtMTAtMTBoLTE5Ljc0M3YtMjUxLjI5OHptLTE0Ni41MzgtNzIuMjc4di0yNS4yNDdoNzkuNjI5djI1LjI0N3ptLTI3OC41NTMtMjUuMjQ3aDc5LjYyOXYyNS4yNDdoLTc5LjYyOXptNDE1LjA5MSA0MDEuMTAyaC00NzJ2LTMyLjI3OWg0NzJ6bS0yOS43NDMtNTIuMjc5aC00MTIuNTE0di0yNTEuMjk4aDQxMi41MTR6IiBmaWxsPSIjMDhlMzA2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTI0Ni45NSA5NC41MmMxLjU3OSAzLjc5MSA1LjQzNCA2LjMxNyA5LjU1NSA2LjE3NCA0LjExNi0uMTQzIDcuODE4LTIuODg1IDkuMTQ0LTYuNzgzIDEuMzQzLTMuOTQ3LjAyNC04LjQ2NC0zLjI1NS0xMS4wNDYtMy4yODctMi41ODgtNy45MjctMi44NjYtMTEuNDkxLS42NjEtNC4xMDIgMi41NC01LjgwOSA3Ljg2MS0zLjk1MyAxMi4zMTZ6IiBmaWxsPSIjMDhlMzA2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="
                            />
                            <a href=" # ">BATTERY BACKUP GENERATOR</a>
                        </div>
                        <div className="info-link ">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ4MC4wMDMgNDgwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDc4LjQsMTAwLjYyNGMxLjYwOC0yLjE0NCwyLjA0LTQuOTUyLDEuMTQ0LTcuNDhzLTMtNC40MzItNS42LTUuMDg4bC0yNi44MDgtNi43MDQgICAgYy0xLjg4OC0zLjg0LTQuMTA0LTcuNjE2LTYuNjMyLTExLjI2NGw3LjMzNi0zNi42OTZjMC41NzYtMi44OC0wLjQ3Mi01Ljg0LTIuNzI4LTcuNzJjLTIuMjU2LTEuODgtNS4zNi0yLjM2OC04LjA4OC0xLjI4ICAgIEw0MDEuNjE2LDM4LjU2Yy0yLjcxMi0xLjEzNi01LjQyNC0yLjExMi04LjA5Ni0yLjkybC0zLjU2LTEuNzc2TDM3NS4xNTIsNC4yNDhjLTIuNzEyLTUuNDI0LTExLjYtNS40MjQtMTQuMzEyLDBsLTE0LjgwOCwyOS42MTYgICAgbC0zLjU1MiwxLjc3NmMtMi42NzIsMC44MTYtNS4zODQsMS43OTItOC4wOTYsMi45MmwtMzUuNDA4LTE0LjE2OGMtMi43MTItMS4wNzItNS44MzItMC42MDgtOC4wODgsMS4yOCAgICBjLTIuMjU2LDEuODcyLTMuMzA0LDQuODQtMi43MjgsNy43Mmw3LjMzNiwzNi42OTZjLTIuNDY0LDMuNTYtNC42MzIsNy4yMzItNi40OCwxMC45NjhsLTM0LjU4NCw2LjkyICAgIGMtMi44ODgsMC41NzYtNS4yMzIsMi43MDQtNi4wODgsNS41MmMtMC44NTYsMi44MjQtMC4wODgsNS44ODgsMiw3Ljk3NkwyODAsMTMxLjEzNnYxMC44bC0xNS4xNiwzMC4zMTIgICAgYy0xLjI0LDIuNDgtMS4xMDQsNS40MjQsMC4zNTIsNy43ODRjMS40NjQsMi4zNTIsNC4wMzIsMy43OTIsNi44MDgsMy43OTJoMzUuNjY0YzIuMDI0LDEuODg4LDQuMjA4LDMuNzM2LDYuNjE2LDUuNTkybDUuNzIsNS43MiAgICB2MjguNjg4YzAsMy4wMzIsMS43MTIsNS44LDQuNDI0LDcuMTZjMi43MTIsMS4zNDQsNS45NTIsMS4wNTYsOC4zNzYtMC43NmwyNy4yLTIwLjR2NjIuNDA4Yy00MC4zNjgsNC4wMjQtNzIsMzguMTg0LTcyLDc5LjU5MiAgICBzMzEuNjMyLDc1LjU2OCw3Miw3OS41OTJ2MzIuNDA4SDExMnYtMTZoOGMxLjcyOCwwLDMuNDE2LTAuNTYsNC44LTEuNmwzMi0yNGMyLjAxNi0xLjUwNCwzLjItMy44OCwzLjItNi40di0yNHYtMzJ2LTMwLjM2ICAgIGwyMy4yNzItNTQuMzEybDE4Ljg3Mi00MS4yMzJjMC4xMTItMC4yNDgsMC4yMTYtMC41MDQsMC4zMDQtMC43NmMzLjY4OC0xMC44OCw1LjU1Mi0yMi4wOTYsNS41NTItMzMuMzM2ICAgIGMwLTU3LjM0NC00Ni42NTYtMTA0LTEwNC0xMDRTMCwxNDIuNDgsMCwxOTkuODI0YzAsMTEuMjQsMS44NjQsMjIuNDU2LDUuNTUyLDMzLjMzNmMwLjA4OCwwLjI1NiwwLjE5MiwwLjUxMiwwLjMwNCwwLjc2ICAgIGwxOC43OTIsNDEuMDU2TDQ4LDMyOS40NjR2MzAuMzZ2MzJ2MjRjMCwyLjUyLDEuMTg0LDQuODg4LDMuMiw2LjRsMzIsMjRjMS4zODQsMS4wNCwzLjA3MiwxLjYsNC44LDEuNmg4djI0YzAsNC40MTYsMy41ODQsOCw4LDggICAgaDI2NGM0LjQxNiwwLDgtMy41ODQsOC04di00MC40MDhjNDAuMzY4LTQuMDI0LDcyLTM4LjE4NCw3Mi03OS41OTJzLTMxLjYzMi03NS41NjgtNzItNzkuNTkydi02Mi40MDhsMjcuMiwyMC40ICAgIGMxLjQxNiwxLjA1NiwzLjEwNCwxLjYsNC44LDEuNmMxLjIxNiwwLDIuNDQ4LTAuMjgsMy41NzYtMC44NGMyLjcxMi0xLjM2LDQuNDI0LTQuMTI4LDQuNDI0LTcuMTZ2LTI4LjY4OGw1LjcyLTUuNzIgICAgYzIuNDA4LTEuODU2LDQuNTkyLTMuNzA0LDYuNjE2LTUuNTkySDQ2NGMyLjc3NiwwLDUuMzQ0LTEuNDQsNi44MDgtMy43OTJjMS40NTYtMi4zNiwxLjU5Mi01LjMwNCwwLjM1Mi03Ljc4NEw0NTYsMTQxLjkzNiAgICB2LTExLjQ0OEw0NzguNCwxMDAuNjI0eiBNMTQ0LDM4My44MjRINjR2LTE2aDgwVjM4My44MjR6IE0xNDQsMzUxLjgyNEg2NHYtMTZoMjRoMzJoMjRWMzUxLjgyNHogTTc2Ljc2LDI0OS44OCAgICBjNy4zMjgsMy4zNTIsMTYuNDgsNS45NDQsMjcuMjQsNS45NDRjNS4yLDAsMTUuNzM2LTAuNzYsMjcuMjMyLTUuOTJsLTE3LjQ4LDY5LjkySDk0LjI0OEw3Ni43NiwyNDkuODh6IE0zOS4yNzIsMjY4LjQ5NiAgICBMMjAuNTc2LDIyNy42NEMxNy41MzYsMjE4LjUzNiwxNiwyMDkuMTg0LDE2LDE5OS44MjRjMC00OC41MiwzOS40OC04OCw4OC04OHM4OCwzOS40OCw4OCw4OGMwLDkuMzYtMS41MzYsMTguNzEyLTQuNTc2LDI3LjgyNCAgICBsLTE4Ljc3Niw0MS4wMjRsLTIxLjkyLDUxLjE1MmgtMTYuNDhsMjEuNTEyLTg2LjA1NmMwLjg2NC0zLjQ1Ni0wLjY2NC03LjA2NC0zLjczNi04Ljg1NmMtMy4wOC0xLjc5Mi02Ljk2OC0xLjMzNi05LjU0NCwxLjEyICAgIGMtMTMuMDcyLDEyLjQ0OC0yOC40NjQsMTMuNzkyLTM0LjQ4LDEzLjc5MmMtMTguMDU2LDAtMzAuMTI4LTkuNjQ4LTM0LjQ4LTEzLjc5MmMtMi41NzYtMi40NTYtNi40NzItMi45MTItOS41NDQtMS4xMiAgICBzLTQuNiw1LjQtMy43MzYsOC44NTZsMjEuNTEyLDg2LjA1NmgtMTYuNDhMMzkuMjcyLDI2OC40OTZ6IE05MC42NzIsNDMxLjgyNGwtMjYuNjcyLTIwdi0xMmg4MHYxMmwtMjYuNjY0LDIwSDkwLjY3MnogICAgIE00MzIsMzUxLjgyNGMwLDM1LjI4OC0yOC43MTIsNjQtNjQsNjRjLTM1LjI4OCwwLTY0LTI4LjcxMi02NC02NGMwLTM1LjI4OCwyOC43MTItNjQsNjQtNjQgICAgQzQwMy4yODgsMjg3LjgyNCw0MzIsMzE2LjUzNiw0MzIsMzUxLjgyNHogTTQ0MC44NCwxNDcuNGwxMC4yMTYsMjAuNDI0aC0yNS45NjhjLTIuMTUyLDAtNC4yMDgsMC44NjQtNS43MTIsMi4zOTIgICAgYy0yLjI2NCwyLjMxMi00LjgxNiw0LjUzNi03Ljc5Miw2LjgxNmMtMC4yODgsMC4yMTYtMC41NTIsMC40NDgtMC44MDgsMC43MDRsLTguNDMyLDguNDMyYy0xLjUwNCwxLjQ5Ni0yLjM0NCwzLjUzNi0yLjM0NCw1LjY1NiAgICB2MTZsLTE5LjItMTQuNGMtMS4zODQtMS4wNC0zLjA3Mi0xLjYtNC44LTEuNmgtMTZjLTEuNzI4LDAtMy40MTYsMC41Ni00LjgsMS42bC0xOS4yLDE0LjR2LTE2YzAtMi4xMi0wLjg0LTQuMTYtMi4zNDQtNS42NTYgICAgbC04LjQzMi04LjQzMmMtMC4yNDgtMC4yNTYtMC41Mi0wLjQ4OC0wLjgwOC0wLjcwNGMtMi45ODQtMi4yNzItNS41MjgtNC41MDQtNy43OTItNi44MTZjLTEuNTA0LTEuNTI4LTMuNTYtMi4zOTItNS43MTItMi4zOTIgICAgaC0yNS45NjhsMTAuMjA4LTIwLjQyNGMwLjU2LTEuMTA0LDAuODQ4LTIuMzM2LDAuODQ4LTMuNTc2di0xNmMwLTIuMTItMC44NC00LjE2LTIuMzQ0LTUuNjU2bC0yMS40MzItMjEuNDMybDIzLjkwNC00Ljc4NCAgICBjMi41NzYtMC41MTIsNC43MjgtMi4yNjQsNS43NzYtNC42NzJjMi4xMDQtNC44NzIsNC44OTYtOS42NzIsOC4zMDQtMTQuMjU2YzAuMjgtMC4zNzYsMC43MzYtMS4yMDgsMC45NTItMS42MjQgICAgYzAuNzkyLTEuNTkyLDEuMDQtMy40LDAuNjg4LTUuMTUybC01LjEwNC0yNS41MTJsMjQuODE2LDkuOTI4YzIuMDQ4LDAuODA4LDQuMzI4LDAuNzYsNi4zMjgtMC4xNjggICAgYzMuMzA0LTEuNTIsNi42MDgtMi43NzYsOS44MTYtMy43MTJjMC40NTYtMC4xMzYsMC44OTYtMC4zMTIsMS4zMjgtMC41Mmw2LjU2LTMuMjhjMS41NDQtMC43NzYsMi44MDgtMi4wMzIsMy41NzYtMy41NzYgICAgTDM2OCwyNS43MTJsOC44NCwxNy42ODhjMC43NzYsMS41NDQsMi4wMzIsMi44MDgsMy41NzYsMy41NzZsNi41NiwzLjI4YzAuNDI0LDAuMjA4LDAuODY0LDAuMzg0LDEuMzI4LDAuNTIgICAgYzMuMjA4LDAuOTQ0LDYuNTA0LDIuMTkyLDkuODE2LDMuNzEyYzIsMC45MjgsNC4yNzIsMC45NzYsNi4zMjgsMC4xNjhsMjQuODE2LTkuOTI4TDQyNC4xNiw3MC4yNCAgICBjLTAuMzUyLDEuNzQ0LDAuMTEyLDQsMC45MDQsNS41ODRjMC4yMDgsMC40MTYsMC40NTYsMC44MTYsMC43MjgsMS4xODRjMy40MTYsNC42LDYuMjE2LDkuNDI0LDguMzM2LDE0LjMzNiAgICBjMC45ODQsMi4yODgsMi45ODQsMy45OTIsNS40LDQuNTkybDE4LjgzMiw0LjcxMmwtMTYuNzYsMjIuMzc2Yy0xLjA0LDEuMzg0LTEuNiwzLjA3Mi0xLjYsNC44djE2ICAgIEM0NDAsMTQ1LjA2NCw0NDAuMjg4LDE0Ni4yOTYsNDQwLjg0LDE0Ny40eiIgZmlsbD0iIzA4ZTMwNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzY4LDYzLjgyNGMtMzAuODgsMC01NiwyNS4xMi01Niw1NnMyNS4xMiw1Niw1Niw1NnM1Ni0yNS4xMiw1Ni01NlMzOTguODgsNjMuODI0LDM2OCw2My44MjR6IE0zNjgsMTU5LjgyNCAgICBjLTIyLjA1NiwwLTQwLTE3Ljk0NC00MC00MGMwLTIyLjA1NiwxNy45NDQtNDAsNDAtNDBjMjIuMDU2LDAsNDAsMTcuOTQ0LDQwLDQwQzQwOCwxNDEuODgsMzkwLjA1NiwxNTkuODI0LDM2OCwxNTkuODI0eiIgZmlsbD0iIzA4ZTMwNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzk4LjgwOCwzMzkuNjE2Yy0xLjQ2NC0yLjM1Mi00LjAzMi0zLjc5Mi02LjgwOC0zLjc5MmgtMzMuODcybDE2LjcyOC0yNy44OGwtMTMuNzItOC4yMzJsLTI0LDQwICAgIGMtMS40ODgsMi40NzItMS41Miw1LjU1Mi0wLjEwNCw4LjA1NmMxLjQyNCwyLjUwNCw0LjA4OCw0LjA1Niw2Ljk2OCw0LjA1NmgzNS4wNTZsLTE4LjIwOCwzNi40MjRsMTQuMzEyLDcuMTUybDI0LTQ4ICAgIEM0MDAuNCwzNDQuOTIsNDAwLjI2NCwzNDEuOTc2LDM5OC44MDgsMzM5LjYxNnoiIGZpbGw9IiMwOGUzMDYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iOTYiIHk9IjQ3LjgyNCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjMyIiBmaWxsPSIjMDhlMzA2IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjE3MS4wMjkiIHk9Ijc1LjgxOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtNC4yMDQ0IDE1Ny40ODY2KSIgd2lkdGg9IjMzLjk0NCIgaGVpZ2h0PSIxNiIgZmlsbD0iIzA4ZTMwNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIxMi4wMDEiIHk9IjY2Ljg1MyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtNTMuNDE1MiAzOC42OTQyKSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjMzLjk0NCIgZmlsbD0iIzA4ZTMwNiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
                            />
                            <a href=" # ">WHOLE HOUSE SURGE PROTECTION</a>
                        </div>

                    </div>
                    <div className="row-services ">
                        <div className="contact-elm clearfix ">
                            <h3>Contact Us</h3>



                            <div className="info ">
                                <div className="icon-img ">
                                    <img src="/assets/images/home/cooment.svg " alt="cooment " />


                                </div>
                                <strong>Visit The Office</strong>
                                <div className="info-text ">

                                    <p> 102 Taily End Rd, NY</p>
                                </div>
                            </div>
                            <div className="info ">
                                <div className="icon-img ">
                                    <img src="/assets/images/home/icon-mail-1.png " alt="image " />

                                </div>
                                <strong>Send Email</strong>
                                <div className="info-text ">

                                    <p><a href="# "> info@domain.com</a></p>
                                </div>
                            </div>
                            <div className="info ">
                                <div className="icon-img ">
                                    <img src="http://smartdemowp.com/strnix/wp-content/uploads/2020/06/phone.svg " alt="phone " />
                                </div>
                                <strong>Phone Inquiry</strong>
                                <div className="info-text ">

                                    <p><a href="# "> (222) 303 4500 </a></p>
                                </div>

                            </div>
                        </div>
                        <div className="contact-elm ">
                            <div className="contact ">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  About StrnixStrnix</a>
                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  News Blog</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  Careers</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  Case Studies</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  Meet Our Team</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  TestimonialsTestimonials</a>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-elm ">
                            <h3>Our Services</h3>
                            <div className="contact ">

                                <ul>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i> Stallation & Monitoring </a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  After Sales Service</a>

                                    </li>
                                    <li>

                                        <a href="# "><i className="fas fa-arrow-right "></i>  Free Replacemrnt</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  Warrenty Claims</a>

                                    </li>
                                    <li>
                                        <a href="# "><i className="fas fa-arrow-right "></i>  Energy Equipments</a>

                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="contact-elm ">
                            <div className="contact-logo ">
                                <a href="# "><img src="/assets/images/home/logo.svg " alt="Logo " />
                                </a>
                                <p>Integer lobortis sem consequat imperdiet In nulla viverra ut lorem ut, dapibus conse etur diam. Nun bibendum diet condiment sed ipsum duis lacinia.</p>
                                <ul className="social-comunity ">
                                    <li>
                                        <a href="# "><i className="fab fa-twitter "></i></a>
                                    </li>
                                    <li>
                                        <a href="# "><i className="fab fa-facebook-f "></i></a>
                                    </li>
                                    <li><a href="# "><i className="fab fa-instagram "></i></a>
                                    </li>
                                    <li>
                                        <a href="# "><i className="fab fa-linkedin-in "></i></a>
                                    </li>
                                    <li><a href="# "><i className="fab fa-pinterest-p "></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer clearfix ">
                <div className="footer-container clearfix ">
                    <div className="footer-left ">
                        <span>&#169; Copyright 2019 by </span><span> <a href="# "><strong>Strnix</strong></a></span>
                    </div>
                    <div className="footer-right ">
                        <a href="# ">Privacy Policy </a><span> | </span><a href="# "> Sitemap </a><span> | </span><a href="# "> Terms & Conditions</a>
                    </div>
                </div>
                <div className="go-back" >
                    <span onClick={goToTop }><i className="fas fa-arrow-up "></i></span>
                </div>
            </div>
        </footer>
    )
}