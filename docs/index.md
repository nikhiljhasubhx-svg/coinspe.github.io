# Coinspe Payment Gateway

<div class="hero hero--coinspe" markdown>
<p class="hero__eyebrow">Merchant API Reference · Version 1.0.0.2 · JWT + HMAC</p>
<h1>Crypto-native payments with enterprise guardrails.</h1>
<p>Create and monitor payment links, wire-up callbacks, and stay in sync with live market rates across production and UAT.</p>
<div class="hero__actions">
  <a class="md-button md-button--primary" href="getting-started/quickstart/">Launch Quickstart</a>
  <a class="md-button" href="api-reference/rest-endpoints/">Browse API Reference</a>
</div>
</div>

<div class="toast" data-toast markdown>
  <div class="toast__content">
    <span class="toast__badge">Status</span>
    <strong>PROD</strong> is healthy · <code>https://api.coinspe.com</code> · JWT TTL 30s
  </div>
  <button class="toast__close" data-toast-close aria-label="Dismiss notification">×</button>
</div>

## Environments

| Environment | Base URL | Notes |
| --- | --- | --- |
| Production | `https://api.coinspe.com` | Live traffic, monitored 24/7. |
| UAT | `https://uat.coinspe.com` | Mirrors production features for certification. |

> Use [`GET /api/timestamp`](api-reference/rest-endpoints.md#fetch-server-time) before signing requests—Coinspe enforces ±30 seconds drift.

## What’s inside

<div class="cards cards--three" markdown>

-   :key: **Authentication & security**  
    HMAC signature rules, bearer-token lifecycle, and timestamp drift handling.  
    [:material-lock: Authentication](getting-started/authentication.md)

-   :material-link-variant: **Payment links**  
    Create, monitor, and paginate payment links across receive/send flows.  
    [:material-api: REST Endpoints](api-reference/rest-endpoints.md)

-   :material-webhook: **Callbacks**  
    Webhook payloads, signature verification, and reconciliation best practices.  
    [:material-bell-outline: Webhooks](api-reference/webhooks.md)

-   :material-chart-line: **Market data**  
    Real-time buy/sell rates with receive/send logic explained.  
    [:material-currency-usd: Market Prices](api-reference/rest-endpoints.md#crypto-market-prices)

-   :beetle: **Errors & troubleshooting**  
    HTTP status catalog, envelope format, and support escalation checklist.  
    [:material-alert-circle: Error Guide](guides/errors.md)

-   :material-history: **Changelog**  
    Track what changed in each release of the public API & docs.  
    [:material-timeline-clock: Changelog](resources/changelog.md)

</div>

## Operational checklist

1. **Sync time** – Call `/api/timestamp` and adjust clocks if drift > 30s.
2. **Sign in** – Generate `HMAC-SHA256(timestamp, secret_key)` and call `/api/v1/login`.
3. **Issue links** – `POST /api/v1/payment-gateway/create-link` with redirect + callback URLs.
4. **Monitor status** – Poll `/payment-link/{token}` or process webhook callbacks.
5. **Audit** – Store `request_id`, webhook payloads, and reconcile before fulfilling.

## Getting help

!!! info "Coinspe Support"
    - Email: [support@coinspe.com](mailto:support@coinspe.com)  
    - Pager (critical): via dashboard  
    - Docs feedback? Create an issue in [`coinspe/coinspe.github.io`](https://github.com/coinspe/coinspe.github.io)

For roadmap discussions or partner enablement, reach out to your Coinspe solutions engineer.
