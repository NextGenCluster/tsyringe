import {InternalDependencyContainer, ParamInfo} from "./dependency-container"; // eslint-disable-line
import {constructor} from "./types"; // eslint-disable-line

if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
  throw new Error(
    `tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`
  );
}

export {
  DependencyContainer,
  Disposable,
  Lifecycle,
  RegistrationOptions,
  Frequency
} from "./types";

declare global {
  namespace NodeJS { // eslint-disable-line
    interface Global {
      __typeInfo: Map<constructor<any>, ParamInfo[]>;
      __GlobalContainer: InternalDependencyContainer;
    }
  }
}
export * from "./decorators";
export * from "./factories";
export * from "./providers";
export {delay} from "./lazy-helpers";
export {instance as container} from "./dependency-container";
