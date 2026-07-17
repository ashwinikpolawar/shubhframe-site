# ShubhFrame Legal Website

A responsive, dependency-free static website containing:

- Privacy Policy: `/privacy-policy/`
- Terms of Service: `/terms-of-service/`
- Account Deletion: `/delete-account/`
- Legal landing page: `/`

The account-deletion form runs entirely in the browser. It prepares an email to the support address and does not send personal data to a third-party form service.

## Important review before publishing

The package currently uses this support address because it was supplied for ShubhFrame:

`indian.insect.killer@gmail.com`

This address becomes public on the website. A separate support/privacy mailbox or email-forwarding alias is recommended instead of exposing an administrator login address. To change it, replace the address in:

- `public/assets/site.js`
- `public/index.html`
- `public/privacy-policy/index.html`
- `public/terms-of-service/index.html`
- `public/delete-account/index.html`

Also verify these statements match the released app:

1. In-app deletion path: `Settings → Account → Delete Account`
2. Cloud input/output retention: up to 30 days
3. Operational log retention: up to 90 days
4. Providers actually used: Firebase, Cloudflare, GitHub Actions, IDrive e2, Expo/FCM, and Render
5. Developer/entity name shown in the Google Play listing
6. Minimum user age and applicable jurisdiction

Legal policies must describe actual behaviour. Obtain legal review before relying on these documents for production compliance.

## Preview locally

From the project directory:

```bash
python3 -m http.server 8080 --directory public
```

Open:

```text
http://localhost:8080
```

## Deploy to Render with `render.yaml`

1. Create a new GitHub repository.
2. Copy all files from this folder into the repository.
3. Commit and push:

```bash
git init
git add .
git commit -m "Add ShubhFrame legal website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

4. Sign in to Render.
5. Choose **New → Blueprint**.
6. Connect the GitHub repository containing `render.yaml`.
7. Review the `shubhframe-legal` static site and apply the Blueprint.
8. Render will publish an HTTPS URL similar to:

```text
https://shubhframe-legal.onrender.com
```

The final Google Play URLs will be:

```text
https://YOUR-RENDER-DOMAIN/privacy-policy/
https://YOUR-RENDER-DOMAIN/terms-of-service/
https://YOUR-RENDER-DOMAIN/delete-account/
```

## Deploy using Render's Static Site screen

Instead of a Blueprint:

1. Select **New → Static Site**.
2. Connect the GitHub repository.
3. Set **Build Command** to:

```text
echo "Static site ready"
```

4. Set **Publish Directory** to:

```text
public
```

5. Deploy.

## Google Play Console usage

- Add the Privacy Policy URL to the app's store listing and ensure the same link is available inside the app.
- In **App content → Data safety**, use the `/delete-account/` URL as the external account-deletion resource.
- Keep the Data safety answers consistent with the Privacy Policy and the actual app/SDK behaviour.
- Ensure the app itself also has a prominent account-deletion pathway.

## Project structure

```text
.
├── render.yaml
├── README.md
└── public
    ├── index.html
    ├── 404.html
    ├── robots.txt
    ├── assets
    │   ├── favicon.svg
    │   ├── site.js
    │   └── styles.css
    ├── privacy-policy
    │   └── index.html
    ├── terms-of-service
    │   └── index.html
    └── delete-account
        └── index.html
```
