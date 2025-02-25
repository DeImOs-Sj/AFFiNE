import { Module } from '@nestjs/common';

import { StorageModule } from '../storage';
import { PermissionService } from '../workspaces/permission';
import { QuotaService } from './service';
import { QuotaManagementService } from './storage';

/**
 * Quota module provider pre-user quota management.
 * includes:
 * - quota query/update/permit
 * - quota statistics
 */
@Module({
  imports: [StorageModule],
  providers: [PermissionService, QuotaService, QuotaManagementService],
  exports: [QuotaService, QuotaManagementService],
})
export class QuotaModule {}

export { QuotaManagementService, QuotaService };
export { Quota_FreePlanV1, Quota_ProPlanV1, Quotas } from './schema';
export { QuotaType } from './types';
