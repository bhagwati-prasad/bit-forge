# Features
===
- SPA => for Nginx (try_files $uri $uri/ $uri.html /index.html)
- All pages are requested via ajax (complete page or a component of page) Router => page, component, data
- Pages/components/data can be cached so that successive navigation is fast, Cache can be maintained in State
- "Consent to share data" to get insights
- Patches to app (frontend/backend) can be delivered in form of updates (like any app). A button which asks to update it.
- URL should (for easy internal navigation)
-- Highlight action requested (or search term)
-- Open relevant component by navigating to a URL (eg - opening a URL can - open a page, open a dialog box, highlight input/button/text)
- If a component/page is requested from app (via ajax, then return component without populating) then both data and layout requests are made in paralled, data is populated after layout reaches app (promise.all)
-- For AJAX request, component/page is sent without populating it with relevant data.
- If a component/page is requested from URL bar then page/component is populated on server side and then sent to client.
-- For non-AJAX request, component/page is populated with relevant data on server side and then sent to client.

# ToDo: Compilation
===
- Cascade all styles into single style tag and put it inline.
- Merge all Javascript and put it inline (except page/component specific, atleat framework specific).
- Minify new HTML file.
- Remove: log.startupMessage


# Wiki: Links
===
- href starts with 'http' => redirect with load
- href starts with '/' => ajax load, target is assumed to be entire page
- href starts with '/' and has CSS selector in target => load target CSS elements with content from href
