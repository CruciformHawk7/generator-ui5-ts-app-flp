import { ConfigFileOptions, EmitModes, Modes } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
	mode: Modes.models,
	emitMode: EmitModes.dts,
	services: {
		taxprovision: {
			source: "webapp/localService/metadata.xml",
			output: "webapp/oData/"
		}
	}
};

export default config;
