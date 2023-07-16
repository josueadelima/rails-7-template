// Entry point for the build script in your package.json
import { define } from 'remount';
import HelloWorld  from './components/hello-world/index';

define({ 'hello-world-component': HelloWorld })
