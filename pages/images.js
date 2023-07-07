function InmagePage(){
    return(
        <div>
            {
                ['1','2','3','4','5'].mapap( path =>{
                    return(
                        <div key={path}>
                            <img src={'/${path}.jpg'} />
                            </div>
                    )
                })
            }
        </div>
    )
}