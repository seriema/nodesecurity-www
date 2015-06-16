var Hapi = require('hapi');
var Joi = require('joi');
var config = require('config');
var postageapp = require('postageapp')(config.postageapp.apiKey);

// Create a server with a host and port
var server = new Hapi.Server(config.hapi.options);
server.connection({ host: config.hapi.hostname, port: config.hapi.port });

server.views({
    engines: {
        jade: require('jade'),
    },
    path: './views',
    isCached: process.env.NODE_ENV==='production'
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'index'
    }
});

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: { path: './public', listing: false, index: true }
    }
});

server.route({
    method: 'GET',
    path: '/contribute',
    handler: {
        view: 'contribute'
    }
});

server.route({
    method: 'GET',
    path: '/report',
    handler: {
        view: 'report'
    }
});

server.route({
    method: 'GET',
    path: '/thanks',
    handler: {
        view: 'email-success'
    }
});

server.route({
    method: 'GET',
    path: '/email-error',
    handler: {
        view: 'email-error'
    }
});

server.route({
    method: 'GET',
    path: '/research',
    handler: {
        view: 'research'
    }
});

server.route({
    method: 'GET',
    path: '/resources',
    handler: {
        view: 'resources'
    }
});

server.route({
    method: 'GET',
    path: '/tools',
    handler: {
        view: 'tools'
    }
});


server.route({
    method: 'post',
    path: '/contact',
    handler: function (request, reply) {
        config.postageapp.opts.variables = {
            'description' : request.payload.description,
            'module': request.payload.module,
            'name': request.payload.name,
            'stamp': Date.now()
        };

        config.postageapp.opts.subject = request.payload.name + ' | Awesome Node Security Project Email';
        config.postageapp.opts.from = request.payload.email;

        postageapp.sendMessage(config.postageapp.opts, function callback() {
            reply.view('email-success', {title: ''});
            console.log('Successful email sent:');
            console.log('Name: ', request.payload.name, 'Email: ', request.payload.email);
            console.log('Sent to: ' + config.postageapp.opts.recipients);
        }, function err() {
            console.log('Messed Up sending email');
            console.log(JSON.stringify(arguments));
            reply.view('email-error', {title: 'whoops', message: 'Something message up, please email report@nodesecurity.io'});
        });
    },
    config: {
        validate: {
            payload: {
                name: Joi.string().required(),
                email: Joi.string().required(),
                module: Joi.string(),
                description: Joi.string(),
                page: Joi.string(),
                success_page: Joi.string(),
                error_page: Joi.string()
            }
        }
    }
});


server.register([
    {
        register: require('./hapi-advisories'),
        options: null
    },
    {
        register: require('good'),
        options: {
            reporters: [{
                reporter: require('good-console'),
                args: [{ log: '*', response: '*', request: '*' }]
            }]
        }
    }
], function (err) {
    if (err) { 
        console.log('Failed to load plugin: ' + err);
    } else {
        console.log('Loaded advisories');
        // Start the server
        server.start(function (err) {
            if (err) {
                throw err;
            }
            console.log('Started Server on port: ', config.hapi.port);
        });
    }
});


// Deal with errors
server.ext('onPreResponse', function (request, reply) {
    var response = request.response;
    if (!response.isBoom) {
        return reply.continue();
    }

    // Replace error with friendly HTML

    var error = response;
    var ctx = {
        message: (error.output.statusCode === 404 ? 'page not found' : 'something went wrong')
    };

    reply.view('error', ctx).code(error.output.statusCode);
});

