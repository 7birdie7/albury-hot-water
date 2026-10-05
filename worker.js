import handler from "vinext/server/fetch-handler";
export * from "vinext/server/fetch-handler";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.hostname === "www.alburyhotwater.com") {
      url.hostname = "alburyhotwater.com";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 308);
    }
    return handler.fetch(request, env, ctx);
  },
};
