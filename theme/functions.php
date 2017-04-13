<?php

/**
 * Include the TGM_Plugin_Activation class.
 */
require_once dirname( __FILE__ ) . '/TGM-Plugin-Activation-2.6.1/class-tgm-plugin-activation.php';

add_action( 'tgmpa_register', 'wpng_register_required_plugins' );

/**
 * Register the required plugins for this theme.
 */
function wpng_register_required_plugins() {
    $plugins = array(
        array(
            'name'               => 'WordPress REST API (Version 2)',
            'slug'               => 'rest-api',
            'source'             => get_stylesheet_directory() . '/plugins/rest-api.2.0-beta15.zip',
            'required'           => true,
            'version'            => '',
            'force_activation'   => false,
            'force_deactivation' => false,
            'external_url'       => '',
            'is_callable'        => '',
        ),
    );

    $config = array();

    tgmpa( $plugins, $config );

}
