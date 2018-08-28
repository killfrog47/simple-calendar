<?php
/**
 * Simple Calendar
 *
 * @package   SimpleCalendar
 * @author    Tomas Cordero
 * @copyright Copyright (c) 2018 Tomas Cordero
 * @license   GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Simple Calendar
 * Plugin URI:
 * Description: A simple calendar plugin. Extend it as you see fit!
 * Version:     1.0.0
 * Author:      Tomas Cordero
 * Author URI:  https://tomascordero.com
 * License:     GPL-2.0+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: simple-calendar
 */


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
foreach ( glob( plugin_dir_path( __FILE__ ) . 'admin/*.php' ) as $file ) {
    include_once $file;
}
add_action( 'plugins_loaded', 'simple_calendar' );
/**
 * Starts the plugin.
 *
 * @since 1.0.0
 */
function simple_calendar() {
	$plugin = new Submenu( new Submenu_Page() );
    $plugin->init();
}