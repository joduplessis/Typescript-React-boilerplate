/**
 * Additional types that we couldn't get hold of through Definitely Typed / native lib types
 */

declare module "recharts" {
	export const BarChart: any
	export const Bar: any
	export const Tooltip: any
	export const Legend: any
	export const Area: any
	export const AreaChart: any
	export const LineChart: any
	export const Line: any
	export const XAxis: any
	export const YAxis: any
	export const CartesianGrid: any
	export const ResponsiveContainer: any
}

// Not used anymore!
// Keeping it here as a reference
// Please see our Gulp file for CSS compilation
declare module "*.html" {
    const content: string;
    export default content;
}

declare module "*.scss" {
    const content: string;
    export default content;
}

declare module "*.css" {
    const content: string;
    export default content;
}

declare module "react-file-download" {
    const content: string;
    export default content;
}

declare var process: {
   env: {
       NODE_ENV: string
   }
};
