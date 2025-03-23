import {
  CompositePropagator,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
} from "@opentelemetry/core";
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { getWebAutoInstrumentations } from "@opentelemetry/auto-instrumentations-web";
import { Resource } from "@opentelemetry/resources";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import type { ComponentChildren } from "preact";

const { ZoneContextManager } = await import("@opentelemetry/context-zone");

const exporter = new OTLPTraceExporter({
  url: "https://api.honeycomb.io/v1/traces",
  headers: {},
});

const provider = new WebTracerProvider({
  resource: new Resource({
    [ATTR_SERVICE_NAME]: "browser",
    "user_agent.original": globalThis.navigator.userAgent,
  }),
  spanProcessors: [
    new SimpleSpanProcessor(exporter),
  ],
});

const contextManager = new ZoneContextManager();

provider.register({
  contextManager,
  propagator: new CompositePropagator({
    propagators: [
      new W3CBaggagePropagator(),
      new W3CTraceContextPropagator(),
    ],
  }),
});

registerInstrumentations({
  tracerProvider: provider,
  instrumentations: [
    getWebAutoInstrumentations({
      "@opentelemetry/instrumentation-fetch": {
        propagateTraceHeaderCorsUrls: /.*/,
        clearTimingResources: true,
        applyCustomAttributesOnSpan(span) {
          span.setAttribute("app.synthetic_request", "false");
        },
      },
    }),
  ],
});

interface Props {
  children: ComponentChildren;
}

/**
 *  Set the OpenTelemetry trace provider. Use in the application wrapper.
 *
 * @typedef Props
 * @property {ComponentChildren} children - The children components of the provider.
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function TraceProvider({ children }: Props) {
  return children;
}
