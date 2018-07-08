define(['myComponent'],
    function (myComponent) {
        const basePath = "";
      
        var routes = [
            {
                path: '/',
                name: 'default',
                redirect: basePath + "/myComponent",
            },
            {
                name: "myComponent",
                path: basePath + "/myComponent",
                component: myComponent, 
            }
        ];
        return routes;
    })
