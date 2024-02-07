import { useCallback } from "react";
import socialSignInConfig from "@/utils/socialSignInConfig.json";

/** - 初始化FB SDK */
export default function useInitializeFB() {
  const _InitializeFB = useCallback(() => {
    // SDK 載入完成時會立即呼叫 fbAsyncInit，在這個函式中對 Facebook SDK 進行初始化
    window.fbAsyncInit = function () {
      // 初始化 Facebook SDK
      window.FB.init({
        appId: socialSignInConfig.facebook.appId,
        cookie: true,
        xfbml: true,
        version: socialSignInConfig.facebook.version,
      });
      window.FB.AppEvents.logPageView();
    };
    // 載入 Facebook SDK
    (function (d, s, id) {
      var js: any,
        fjs: any = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
  return { _InitializeFB };
}
declare global {
  interface Window {
    FB: any;
    fbAsyncInit: any;
  }
}
