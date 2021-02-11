import { readFileSync } from 'fs'
import { safeLoadAll } from 'js-yaml'
import _ from 'lodash'

const CONFIG_YML_DIR = `${process.cwd()}/static/marketing/admin/config.yml`
const BACKEND_CONFIG_PROD = {
  name: 'gitlab',
  repo: 'dumarca/landing-page-ssg',
  auth_type: 'implicit',
  app_id: '429f87ba26d4d1054e32126ccf20f2937f5bfff9cb12aec083c64d382a659f5e',
  api_root: 'https://git.enjoy-platform.net/api/v4',
  base_url: 'https://git.enjoy-platform.net',
  auth_endpoint: 'oauth/authorize'
}

describe('Testing config.yml', () => {
  test('config.yml should contain the right configuations for Prod', () => {
    const fileContents = readFileSync(CONFIG_YML_DIR, 'utf8')
    const data = safeLoadAll(fileContents)
    const backendConfig = data[0].backend
    expect(_.isEqual(backendConfig, BACKEND_CONFIG_PROD)).toBeTruthy()
  })
})
