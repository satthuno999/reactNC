<?php

namespace OCA\MyReactApp\AppInfo;

use OCP\AppFramework\App;

class Application extends App {
    public function __construct() {
        parent::__construct('my_react_app');

        $container = $this->getContainer();

        // Define your app's routes
        $container->getRouter()->useNamespace('/my_react_app')->get('/', [
            'controller' => 'MyReactAppController',
            'action' => 'index',
        ]);
    }
}