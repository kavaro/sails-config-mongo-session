/**
 * Created by karl on 24/08/14.
 */

module.exports = function(sailsConfig) {
    return sailsConfig.configurator('session', {
        modules: {
            'connect-session': {
                update: true,
                uninstall: true
            }
        },
        configs: {
            development: {
                adapter: 'mongo',
                host: 'localhost',
                port: 27017,
                collection: 'sessions'
            }
        }
    });
};
