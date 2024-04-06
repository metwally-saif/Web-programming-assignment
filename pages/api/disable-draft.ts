import type { NextApiRequest, NextApiResponse } from 'next'


/**
 * @swagger
 * /api/disable-draft:
 *   get:
 *     description: Disables the draft mode for the user
 *     responses:
 *       200:
 *         description: Draft mode disabled successfully
 */
export default function handle(
  _req: NextApiRequest,
  res: NextApiResponse<void>,
): void {
  // Exit the current user from "Draft Mode".
  res.setDraftMode({ enable: false })

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end()
}

