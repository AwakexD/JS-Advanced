function validate(request) {
    let httpMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

    if (request.method === undefined || !httpMethods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }

    if (request.uri === undefined || !request.uri.match(/^([a-zA-Z0-9\.]+|\*)$/g)) 
    {
        throw new Error('Invalid request header: Invalid URI');
    }

    //TODO

    return request;
}

console.log(validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '',
}));